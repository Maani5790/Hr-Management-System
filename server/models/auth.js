const mongoose = require("mongoose");


const authSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    }
}, {Timestamp: true});

const auth  = mongoose.model("authentication", authSchema);
module.exports = auth;