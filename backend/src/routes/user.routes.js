import {Router } from "express"
import { refreshAccessToken,changeCurrentPassword,getCurrentUser,updateAccountDetails, loginUser, logout, registerUser } from "../controller/user.controller.js"
import  verifyJwt  from "../middlewares/auth.middleware.js"
const router =Router()

router.route("/register").post(registerUser);
router.route("/login").post(loginUser)
router.route("/logout").post(verifyJwt,logout)
router.route("/refresh-token").post(refreshAccessToken)

router.route("/change-password").post(verifyJwt, changeCurrentPassword)
router.route("/current-user").get(verifyJwt, getCurrentUser)
router.route("/update-account").patch(verifyJwt, updateAccountDetails)


export default router