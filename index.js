const express = require('express');
const mongoose = require('mongoose');
const post = require('./post');
const app = express();
app.use(express.json())
app.get("/", (req, res) => {
    res.send("Welcome to my cyclic backend");
})
app.post("/post", async (req, res) => {
    // console.log(...req.body);
    await post.insertMany([req.body]);
    res.send("POST ADDED");
})
app.get("/post", async (req, res) => {
    res.send(await post.find());
})
app.listen(8080, async () => {
    await mongoose.connect("mongodb+srv://laxya:laksh@cluster0.zwu6tqa.mongodb.net/testDBforDeploying?retryWrites=true&w=majority");
    console.log("Server started on 8080")
})