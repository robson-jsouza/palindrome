const express = require("express");
const app = express();

const palindromeRoutes = require("./api/routes/palindrome");

app.use("/palindrome", palindromeRoutes);

module.exports = app;