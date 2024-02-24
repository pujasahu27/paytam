const express = require("express");

const userRouter = require("./user");
const accountRouter = require("./account");

const router = express.Router();
//new router create 
router.use("/user", userRouter)
router.use("/account", accountRouter);


module.exports = router;