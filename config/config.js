//MongoDB Username: SneakOut
//MongoDB Password: L9vOFLeGw6CDdxhZ
const uri = "mongodb+srv://SneakOut:L9vOFLeGw6CDdxhZ@cluster0.2ohl4vu.mongodb.net/?retryWrites=true&w=majority";

const config = {
    env: process.env.NODE_ENV || "development",
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "cOMp_229-gROuP_oNE",
    mongoUri: process.env.MONGODB_URI || uri
};

export default config;