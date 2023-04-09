require("dotenv/config");
var body_parser = require("body-parser");
const app = require("./app");

const port = process.env.PORT ? process.env.PORT : 8000;
const host = process.env.HOST ? process.env.HOST : "127.0.0.1";
url = `http://${host}:${port}/`;

app.use(body_parser.json());
app.listen(port, host, function () {
  console.log("Server Active on", port);
});
