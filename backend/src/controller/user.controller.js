import { User } from "../models/user.models.js";
import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/apiError.js"
import {ApiResponse} from "../utils/apiResponse.js" 
import jwt from "jsonwebtoken";


    const generateAccessRefreshToken=async(userId)=>{   
        try {
            const user=await User.findById(userId)
            if (!user) {
                throw new ApiError(404, "User not found while generating tokens");
            }
            const accessToken=user.generateAccessToken()
            const refreshToken=user.generateRefreshToken()
    
            user.refreshToken=refreshToken
            await user.save({validateBeforeSave:false})
            
            return {accessToken,refreshToken}
        } catch (error) {
           throw new ApiError(400,"Error while generating tokens")
        }
    }
    const registerUser=asyncHandler(async(req,res)=>{

        const {username,email,phoneNo,location,password}=req.body;
        if([username,email,phoneNo,location,password].some(field=>
            field?.trim()===""
        )){
            throw new ApiError(400,"ALL fields are required")
        }
        const existedUser=await User.findOne({
            $or:[{username},{email}]
        })
        if(existedUser){
            throw new ApiError(402,"User already exist");
        }
        const user=await User.create({
            username:username.toLowerCase(),
            email,
            phoneNo,
            location,
            password,
            refreshToken:""
        })

        const createdUser = await User.findById(user._id).select("-password -refreshToken");
        if (!createdUser) {
            throw new ApiError(500, "Unable to create user");
        }

        return res.status(200).json(
            new ApiResponse(200,createdUser,"User Register Successsfully")
        )
    })
    const loginUser=asyncHandler(async(req,res)=>{
        const {email,password}=req.body;
        if([email,password].some(field=>field.trim()==="")){
            throw new ApiError(400,"All fields are required");
        }
        const user=await User.findOne({
            $or:[{email}]
        })
        if(!user){
            throw new ApiError(403,"User Not Exists")
        }
        if(!user.isPasswordCorrect(password)){
            throw new ApiError(404,"Password is incorrect");
        }
        const {accessToken,refreshToken}= await generateAccessRefreshToken(user._id)

        const loggenInuser = user.toObject();
        delete loggenInuser.password;
        delete loggenInuser.refreshToken;

        const options={
            httpOnly:true,
            secure:true
        }
        res.status(200)
        .cookie("accessToken",accessToken,options)
        .cookie("refreshToken",refreshToken,options)
        .json(
            new ApiResponse(200,
                {
                    user:loggenInuser,
                    accessToken,
                    refreshToken
                },
                "User Logged In succesfully"
            ))
    })
    const logout=asyncHandler(async (req,res)=>{
            await User.findByIdAndUpdate(req.user._id,
                {$set:{refreshToken:null}},
                { new:true}
            )
            const options={
                httpOnly:true,              
                secure:true
            }
            res.status(200)
            .clearCookie("accessToken",options)
            .clearCookie("refreshToken",options)
            .json(new ApiResponse(200,{},"User logged Out"))

    })
    const refreshAccessToken = asyncHandler(async (req, res) => {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken

    if (!incomingRefreshToken) {
        throw new ApiError(401, "unauthorized request")
    }

    try {
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        )
    
        const user = await User.findById(decodedToken?._id)
    
        if (!user) {
            throw new ApiError(401, "Invalid refresh token")
        }
    
        if (incomingRefreshToken !== user?.refreshToken) {
            throw new ApiError(401, "Refresh token is expired or used")
            
        }
    
        const options = {
            httpOnly: true,
            secure: true
        }
    
        const {accessToken, newRefreshToken} = await generateAccessAndRefereshTokens(user._id)
    
        return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", newRefreshToken, options)
        .json(
            new ApiResponse(
                200, 
                {accessToken, refreshToken: newRefreshToken},
                "Access token refreshed"
            )
        )
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid refresh token")
    }

    })
    const changeCurrentPassword=asyncHandler(async(req,res)=>{
        const {oldPassword,newPassword}=req.body;
        if(!(oldPassword && newPassword)){
            throw new ApiError(402,"All fields are required")
        }
        const user=await User.findById(req.user?._id)
        if(!user){
            throw new ApiError(400,"user not fetched")
        }
        const isPasswordCorrect = await user.isPasswordCorrect(oldPassword)

        if (!isPasswordCorrect) {
            throw new ApiError(400, "Invalid old password")
        }
        user.password=newPassword
        await user.save({validateBeforeSave:false})

        return res.status(200).json(
            new ApiResponse(200,{},"Password update Successfully")
        )
    })
    const getCurrentUser=asyncHandler((req,res)=>{
        return res.status(200).
        json(
            new ApiResponse(200,
            req.user,
            "Current user fetch successfully")
        )
    })
    const updateAccountDetails=asyncHandler(async(req,res)=>{
        const {phoneNo,location,email}=req.body
        if(!(phoneNo || location || email)){
            throw new ApiError(400,"All fields are required")
        }
        const user=await User.findByIdAndUpdate(
            req.user._id,
           { 
            $set:{
                phoneNo,
                location,
                email
            }
        },{new:true}).select("-password -refreshToken")

        return res.status(200).json(new ApiResponse(200,user,"Account details update Successfully"))

    })

export {
    registerUser,
    loginUser,
    logout,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentUser,
    updateAccountDetails,
}