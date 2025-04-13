import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dbConnect from "./config/dbConnect";
import authRouter from "./routes/authRouter";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

const corsOptions = {
    origin:process.env.FRONTEND_URL,
    credentials:true,
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

dbConnect();

app.use("/api/auth", authRouter);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

