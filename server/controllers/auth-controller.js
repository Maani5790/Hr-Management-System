const userModel = require ("../models/auth.js");
const jwt = require("jsonwebtoken");
const bcrypt = require ("bcrypt");

const userRegister = async (req, res) => {
    const { username, name, password, email } = req.body;
    const user = await userModel.findOne({ username });
    if (user) {
        return res.json({ message: "user already exists" });
    };

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({ username, name, password: hashedPassword, email });
    await newUser.save();
    res.json({ message: "user registered successfully" });
};

const userLogin = async (req, res) => {
    const { username, password } = req.body;
    const user = await userModel.findOne({ username });
    if (!user) {
        res.json({ message: "user cant exist" });
    };
    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
        res.json({ message: "username and password incorrect" });
    };

    const token = jwt.sign({ id: user._id }, "secret");
    res.json({ token, userID: user._id })
    

};

module.exports = { userRegister, userLogin };