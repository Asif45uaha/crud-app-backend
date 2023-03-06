import mongoose from "mongoose";
mongoose.set("strictQuery", true);
const Connection = async (username, passsword) => {
  const URL = `mongodb://${username}:${passsword}@cluster0-shard-00-00.tpr5j.mongodb.net:27017,cluster0-shard-00-01.tpr5j.mongodb.net:27017,cluster0-shard-00-02.tpr5j.mongodb.net:27017/?ssl=true&replicaSet=atlas-wfnrwc-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    const res = mongoose.connect(URL);
    if (res) {
      console.log("Database connected Successfully!!");
    }
  } catch (error) {
    console.log("Error while Connecting to database!!!");
  }
};

export default Connection;
