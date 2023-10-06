const mongoose = require("mongoose");

const teamSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: [String, Number]
    },
    img: {
        data: Buffer,
        contentType: String
    }
}, { Timestamp: true });

const team = mongoose.model("team", teamSchema);
module.exports = team;