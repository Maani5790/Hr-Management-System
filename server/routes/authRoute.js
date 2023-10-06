const express = require("express");
const { userLogin, userRegister } = require("../controllers/auth-controller.js");
const { logOut } = require("../controllers/capture-controller.js");
const authRouter = express.Router();

authRouter.post("/register", userRegister);
authRouter.get("/register", (req, res) => {
    res.send("testing register")
});

authRouter.post("/login", userLogin);
authRouter.get("/login", (req, res) => {
    res.send("testing register")
});

authRouter.get("/logout/:id", logOut);

authRouter.get("/test", async (req,res) =>{
    console.log("testing")
})

module.exports = authRouter;