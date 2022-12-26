const router = require("express").Router();

const User = require("../models/User");

const CryptoJS = require("crypto-js");

const jwt = require("jsonwebtoken")


//Register New User
router.post("/signup", async (req, res) => {

    const newRegistedUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTO_PASS).toString(),

    });
    try {
        const registedUser = await newRegistedUser.save();
        res.status(201).send(registedUser)
    }
    catch (err) {
        res.status(500).send(err)
    }

})


//Login User
router.post("/login", async (req, res) => {
    try {
        const loginUser = await User.findOne({ email: req.body.email });

        if (!loginUser) {
            res.status(401).send("Wrong Credentials..!");
        }


        //decrypt password using cryptoJS
        const decryptPassword = CryptoJS.AES.decrypt(loginUser.password, process.env.CRYPTO_PASS);

        const loginUserPassword = decryptPassword.toString(CryptoJS.enc.Utf8);

        if (loginUserPassword !== req.body.password) {
            res.status(401).send("Wrong Credentials..!");
        }

        //creating accessToken using jwt
        const accessToken = jwt.sign(
            {
                id: loginUser._id,
                isAdmin: user.isAdmin
                
            }, process.env.JWT_SEC_KEY,

            { expiresIn: "1d" }

        );

        res.status(200).send({ accessToken })

    } catch (err) {

        res.status(500).send(err)

    }

})




module.exports = router;