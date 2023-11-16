const user = require('../models/users.js')
const extend = require('lodash/extend.js')

//list user from database (all users or specific one)
const list = async (req, res) => {
  try {
    const userName = req.query.name
  if(userName === null || userName === "" || userName === undefined){
    let users = await user.find()
    res.json(users);
  } else{
    let nameStr = userName.replace('[',"").replace(']',"")
    let users = await user.find({name: nameStr})
    res.json(users);
  }
  } catch (err) {
    return res.status(400).json({
      message: "No user has been found!"
    });
  }
};

//create new item(document) on database
const create = async (req, res) => {
  const user = new user(req.body);
  try {
    await user.save();
    return res.status(200).json({
      message: "Successfully created!",
    });
  } catch (err) {
    return res.status(400).json({
      message: "User could not be created!"
    });
  }
};

//remove all items from database
const removeAll = async (req, res) => {
  try {
    let deletedUsers = await user.deleteMany({});
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

// JWT Token for user Authentication 

const generateToken = (user) => {

  const payload = {
    _id: user._id,
    name: user.name,
    //whatever other data we decide to inclue :)
  };

  return jwt.sign(payload, config.jwtSecret, { expiresIn: '1h' });
};

module.exports = { create, userByID, read, list, remove, removeAll, update, generateToken };
//


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

module.exports = {create, userByID, read, list, remove, removeAll, update };