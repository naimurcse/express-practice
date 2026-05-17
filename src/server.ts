// ! আমাদের server এখানে
import express from "express";
// const express = require("express");
const app = express(); //? application কে declare করলাম।
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//? ঐ application টাকে 5000 number port এ listen করবো।
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
