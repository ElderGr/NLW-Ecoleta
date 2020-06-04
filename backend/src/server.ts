import dotenv from "dotenv";

dotenv.config({
    path: process.env.NODE_ENV === "test" ? '.env.test' : '.env'
})


import express from "express";
import routes from "./routes";
import path from "path";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(5000);