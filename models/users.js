import mongoose from "mongoose";
import crypto from "crypto";

const UserSchema = new mongoose.Schema(
    {
        username:
            {
                type: String,
                trim: true,
                required: "Username is required",
                unique: "Username has been taken"
            }
        ,
        email:
            {
                type: String,
                trim: true,
                unique: 'Email already exists',
                match: [
                    /.+\@.+\..+/,
                    'Please fill a valid email address'],
                required: 'Email is required'
            }
        ,
        created:
            {
                type: Date,
                default: Date.now
            }
        ,
        updated:
            {
                type: Date,
                default: Date.now
            }
        ,
        hashed_password:
        {
            type: String
        }
        ,
        salt: String
        ,
    }
    ,
    {
    methods: {
        hello: function () {
                console.log("Test successful");
            }
            ,
        authenticate: {function(plainText) {
                return crypto
                        .pbkdf2Sync(
                            plainText,
                            this.salt,
                            1000,
                            64,
                            'sha512')
                        .toString(
                            'hex'
                            )
                            ===
                        this
                        .hashed_password;
            }}
            ,
        encryptPassword: function(password) {
                    if (!password)
                        return '';
                    try {
                        return crypto
                        .createHmac('sha256',this.salt)
                        .update(password)
                        .digest('hex');
                    } catch (err) {
                        return '';
                    }
            }
            ,
        makeSalt: function() {
                return Math.round((new Date().valueOf() * Math.random())) + '';
            }
        }
    });

    UserSchema
        .virtual('password')
        .set(function(password)
            {
                this._password = password;
                this.salt = this.makeSalt();
                this.hashed_password = 
                    crypto
                        .createHmac('sha256',this.salt)
                        .update(password)
                        .digest('hex')
                        ;
            })
        .get(
            function() {
                return this._password;
            });

    UserSchema
        .path('hashed_password')
        .validate(
            function(v) {
                if (this._password && this._password.length < 6) {
                    this
                    .invalidate(
                        'password',
                        'Password must be at least 6 characters.'
                        );
                }
                if (this.isNew && !this._password) {
                    this.invalidate('password', 'Password is required');
                }
            }, null);

export default mongoose.model("User", UserSchema);