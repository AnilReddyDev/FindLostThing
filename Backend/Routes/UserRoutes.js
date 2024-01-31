const express = require('express')
const router = express.Router()
const {signInUser,loginUser, tokenVerification } = require('../Controllers/userController')

router.post("/signup",signInUser)
router.post("/login",loginUser)
router.get("/:id/verify/:token",tokenVerification)

module.exports = router;