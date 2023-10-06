const express = require("express")
const { signupUser, loginUser } = require("../controllers/auth-controller.js");
const userRouter = express.Router();

userRouter.post("/signup", signupUser);
userRouter.get("/signup", (req,res)=>{
   res.send("testing signup");
});

userRouter.get("/signin", (req,res)=>{
    res.send("testing login");
 });

userRouter.post("/signin", loginUser);

module.exports = userRouter;