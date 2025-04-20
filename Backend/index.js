import express from "express";
import cors from "cors";
import UserRoute from "./routes/noteRoute.js";

const app = express();
const port = process.env.PORT | 5000;

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(5000, () => console.log("Server connected"));
