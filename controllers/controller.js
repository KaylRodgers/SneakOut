import User from '../models/users.js';
import extend from 'lodash/extend.js';
import crypto from "crypto";
import config from "../config/config.js";
import jwt from "jsonwebtoken";

//list user from database (all users or specific one)
//Incomplete
const list = async (req, res) => {
    try {
      const userName = req.query.username
    if(userName === null || userName === "" || userName === undefined){
      let users = await User.find()
      res.json(users);
    } else{
      let nameStr = userName.replace('[',"").replace(']',"")
      let users = await User.find({name: nameStr})
      res.json(users);
    }
    } catch (err) {
      return res.status(400).json({
        message: "No user has been found!"
      });
    }
  };
  
  //create new item(document) on database
  const create =
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
  };
  
  //remove all items from database
  const removeAll = async (req, res) => {
    try {
      let deletedUsers = await User.deleteMany({});
      return res.status(200).json({
        deletedUsers,
        message: "Successfully deleted!",
      });
      
    } catch (err) {
      console.log(err)
      return res.status(400).json({
        message: "users could not be deleted!"
      });
    }
  };
  
  //find user on database based on user's selection
  const userByID = async (req, res, next, id) => {
    try {
      let user = await user.findById(id);
      if (!user)
        return res.status(400).json({
          error: "user not found",
        });
      req.profile = user;
      next();
    } catch (err) {
      return res.status(400).json({
        error: "Could not retrieve user",
      });
    }
  };
  
  //show item based on userByID result 
  const read = (req, res) => {
    return res.json(req.profile);
  };
  
  //update item based on userByID result 
  const update = async (req, res) => {
    try {
      let user = req.profile;
      user = extend(user, req.body);
      await user.save();
      res.json(user);
    } catch (err) {
      return res.status(400).json({
        message: "No user has been updated!"
      });
    }
  };
  
  //remove item based on userByID result 
  const remove = async (req, res) => {
    try {
      let user = req.profile;
      let deletedUser = await user.deleteOne();
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
  };
  
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
        req.body.token == req.cookies.t;
    if (!(authorized)) {
      return res.status(401).json({
        error: "User is not authorized"
      });
    }
    next();
  }
;

  export default {create, userByID, read, list, remove, removeAll, update, authSignIn, authSignOut, hasAuthorization };