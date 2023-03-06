import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Connection from "../server/database/db.js";
import Routes from "../server/routes/route.js";

const app = express();
dotenv.config();
const PORT = 9000 || process.env.PORT_NO;
app.use(cors());
app.use(express.json());
app.use("/api/v1", Routes);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

app.listen(PORT, () => {
  console.log(`Server is running at port no: ${PORT}`);
});
Connection(username, password);
