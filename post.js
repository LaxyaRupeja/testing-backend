const mongoose = require('mongoose');
const postS = mongoose.Schema({
    title: String,
    live: Boolean
})
module.exports = mongoose.model("post", postS);