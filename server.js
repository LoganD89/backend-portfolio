
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 4000;
const cors = require("cors");
const mailRoutes = require("./routes/index")


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/mailer", mailRoutes)

app.listen(PORT, () => {
  console.log("Server is running on Port:", PORT);
});