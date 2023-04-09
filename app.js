import express, { json } from "express";
import cors from "cors";
import { set, connect } from "mongoose";
import morgan from "morgan";
import bodyParser from "body-parser";
import apiRouter from "./routes/api.route.js";

const app = express();
app.use(cors());
app.use(json());

app.get("/", (req, res) => {
  return res.send("<h1>Hello World</h1>");
});

app.use("/api", apiRouter);

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

set("strictQuery", false);
const db = process.env.DATABASE;
connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Database not connected " + err);
  });

app.use((req, res, next) => {
  const error = new Error("Not Found!");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: error.message,
  });
});
export default app;
