const config = {
    env: process.env.NODE_ENV || "development",
    port: process.env.PORT || 5173,
    jwtSecret: process.env.JWT_SECRET || "cOMp_229",
    mongoUri: process.env.MONGODB_URI || 
    "mongodb+srv://SneakOut_Admin:83fGvqfDZytC3Gb@cluster0.qvpmnce.mongodb.net/?retryWrites=true&w=majority"
};

export default config;