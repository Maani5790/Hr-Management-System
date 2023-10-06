const authModel = require("../models/authModel.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SECRET_KEY = "authUser"


const signupUser = async (req, res) => {
    const { email, name, password } = req.body;

    try {
        const existingUser = await authModel.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ message: "email already exist" })
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const result = await authModel.create({
            email: email,
            name: name,
            password: hashPassword
        });

        const token = jwt.sign({ email: result.email, id: result.id }, SECRET_KEY);
        res.status(201).json({ user: result, token: token })


    } catch (error) {
        console.log("error while signup")
        res.status(401).json({ message: "something went wrong" })
    };
};


const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await authModel.findOne({ email });
    if (!user) {
        res.json({ message: "user cant exist" });
    };
    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
        res.json({ message: "username and password incorrect" });
    };

    const token = jwt.sign({ id: user._id }, "secret");
    res.json({ token, userID: user._id })
}

module.exports = { signupUser, loginUser }