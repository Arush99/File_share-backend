import mongoose from "mongoose";

const DBConnection = async () => {
  const MONGODB_URL =
    "mongodb://user:mongodb@ac-xjpe5i7-shard-00-00.uivfqwl.mongodb.net:27017,ac-xjpe5i7-shard-00-01.uivfqwl.mongodb.net:27017,ac-xjpe5i7-shard-00-02.uivfqwl.mongodb.net:27017/?ssl=true&replicaSet=atlas-u6twnd-shard-0&authSource=admin&retryWrites=true&w=majority";
  try {
    await mongoose.connect(MONGODB_URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error while connecting with the database", error.message);
  }
};

export default DBConnection;
