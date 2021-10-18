const express = require("express");
var router = express.Router();
var insights_v2 = require("./routes/insights/insights_v2.js");
const app = express();
const path = require("path");
var router = express.Router();
app.use(express.static("../client/build"));
app.use("/metadata/users/demo_user", insights_v2);
app.use("/users/demo_user", insights_v2);
// app.use("/reports", insights_v2);
app.use("/users/demo_user", insights_v2);
app.get("/*", function (req, res) {
  const index = path.join(__dirname, "/", "../client/build", "index.html");
  res.sendFile(index);
});
const PORT = process.env.PORT || 6060;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
console.log("the url is ", process.env.API_URL);
exports = module.exports = app;
