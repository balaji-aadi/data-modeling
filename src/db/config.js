import mongoose from "mongoose";
import { DB_NAME, MONGOOSE_URI } from "../secret/secret.js";

const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${MONGOOSE_URI}/${DB_NAME}`
    );
    console.log(
      `Mongodb connected !! DB hosted : ${connectionInstance.connection.host}`
    );
  } catch (err) {
    console.log("Mongo db connection error", err);
    process.exit(1);
  }
};

export default connectDb;
