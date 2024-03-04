const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use("/api/contacts", require("./routes/contactRoutes"));//middleware

console.log("Inside server.js");

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
})