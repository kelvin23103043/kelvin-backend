import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDB=async()=>{
    try{
        console.log("URI:", process.env.MONGODB_URI);
  const connectionInstance=await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );
    console.log(`\n mongo db connected : ${connectionInstance.connection.host}`)
        // app.on("error", (error) => {
        //     console.log("ERROR:", error);
        //     throw error;
        // });

        // app.listen(process.env.PORT, () => {
        //     console.log(`Server is running on port ${process.env.PORT}`);
        // });

}
    catch (error){
 console.log("erro",error);
 process.exit(1);
    }
}
export default connectDB