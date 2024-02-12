import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDb from "./db/connectToMongoDb.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import cookieParser from "cookie-parser";

const app = express();

const PORT = process.env.PORT || 5000; //Ports
dotenv.config(); // configuration dotenv.config

app.use(express.json());
app.use(cookieParser())
// app.get('/',(req,res)=>{
//     res.send('Hello, world!');
// })

app.use("/api/auth",authRoutes) 
app.use("/api/messages",messageRoutes) 
app.use("/api/users", userRoutes);


app.listen(PORT, () => {
	connectToMongoDb();
	console.log(`Server Running on port ${PORT}`);
});