import "dotenv/config";
import app from "./app.js";

const port = process.env.PORT ? process.env.PORT : 8000;
const host = process.env.HOST ? process.env.HOST : "127.0.0.1";

app.listen(port, host, function () {
  console.log("Server Active on", port);
});
