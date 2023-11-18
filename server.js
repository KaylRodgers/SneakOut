import config from "./config/config.js";
import User from './models/users.js';
import app from "./express.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import { expressjwt } from "express-jwt";

const authSignIn = 
async (req, res, next) => {
  try {
    const email = String(req.body.email);
    const user = (await User.find({ email: email }))[0];
    if (!user) {
      return res.status().json({error: "User not found"});
    }
    if (!(
          crypto
            .createHmac('sha256',user.salt)
            .update(req.body.password)
            .digest('hex')
                    ===
          user.hashed_password
          
        )) {
      return res.status().send({error: "Email and password don't match."});
    }
    const token = jwt.sign({ _id: user._id }, config.jwtSecret);
    res.cookie('t', token, { expire: new Date() + 9999 });
    config.userToken = token;
    return res.json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email
      }
    })
    } catch (err) {
      console.log(err.message);
      return res.status("401").json({error: "Could not sign in"});
    }
}
;

const authSignOut = 
  (req, res, next) => {
    res.clearCookie("t"); 
    return res.status(200).json({message: "signed out"});
  }
;

const hasAuthorization =
  async (req, res, next) => {
    const authorized = 
        config.userToken == req.cookies.t
        ;
    if (!(authorized)) {
      return res.status(401).json({
        error: "User is not authorized"
      });
    }
    next();
  }
;


app
  .route('/')
      .all(
              (req, res) => {
                  res.json({message: "Welcome to SneakOut!"});
              }
          );

app
  .route('/auth/signin')
  .post(
    authSignIn
    );

app
  .route('/auth/signout')
  .get(
    authSignOut 
  );

app
  .route("/auth/signup")
  .post(
    async (req, res) => {
      const user = new User(req.body);
      try {
        await user.save();
        return res.status(200).json({
          message: "Successfully created!",
        });
      } catch (err) {
        return res.status(400).json({
          message: "user could not be created!"
        });
      }
    }
  )

app
    .route("/users")
        //Completed
        .get(
              (hasAuthorization)
              ,
              (
                async (req, res) => {
                  const user = await User.find({ email: req.body.email });
                  return res.json(
                    (user)[0]
                    );
                }
              )
        )
        //Completed. This updates a document using the username value.
        .put(
            (hasAuthorization),
            (
              async (req, res) => {
                try {
                //   let user = req.profile;
                  const user = new User(req.body);
                //   console.log(user);
                  await User.updateOne({username: req.body.username}, req.body);
                  res.json(user);
                } catch (err) {
                  return res.status(401).json({
                    message: "No user has been updated!"
                  });
                }
              }
            )
        )
        //Completed.
        .delete(
          (hasAuthorization),
          (
            async (req, res) => {
              try {
                let user = req.body.email;
                let deletedUser = await User.deleteOne({email: user});
                return res.status(200).json({
                  deletedUser,
                  message: "Successfully deleted!",
                });
              } catch (err) {
                console.log(err)
                return res.status(400).json({
                  message: "user could not be deleted!"
                });
              }
            }
          )
        );


app.listen(config.port, (err) => {
    if (err) {
        console.log(err);
    }
    console.info("Server started on port %s.", config.port)
});