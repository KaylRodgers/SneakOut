//establish uri to connect with database
require("dotenv").config();
 const config = {
 env: process.env.NODE_ENV || 'development',
 port: process.env.PORT || 8080,
 mongoUri: process.env.MONGODB_URI ||
 process.env.MONGO_HOST ||
 'mongodb://' + (process.env.IP || 'localhost') + ':' +
 (process.env.MONGO_PORT || '27017') +
 '/sneakerOut'
 }
 module.exports =  config