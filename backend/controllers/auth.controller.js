import { User } from "../models/user.model.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { sendPasswordEmail } from "../mailtrap/emails.js";

export const signup = async (req, res) => {
  const { email, name, phoneNumber } = req.body;

  try {
    if (!email || !name || !phoneNumber) {
      throw new Error(
        `All fields are required ${email}, ${name}, ${phoneNumber}`
      );
    }

    const userAlreadyExists = await User.findOne({ email });
    console.log("userAlreadyExists", userAlreadyExists);

    if (userAlreadyExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const password = Math.random().toString(36).slice(-8);

    const user = new User({
      email,
      name,
      phoneNumber,
      password,
    });

    await user.save();

    // jwt
    generateTokenAndSetCookie(res, user._id);
    await sendPasswordEmail(user.email, user.password);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        ...user._doc,
      },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const login = async (req, res) => {
  const { password } = req.body;
  try {
    const user = await User.findOne({ password });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

    generateTokenAndSetCookie(res, user._id);

    user.lastLogin = new Date();
    await user.save();

    res.status(200).json({
      success: true,
      message: "Logged in successfully",
      user: {
        ...user._doc,
      },
    });
  } catch (error) {
    console.log("Error in login ", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

export const logout = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ success: true, message: "Logged out successfully" });
};

export const checkAuth = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }
    console.log("user", user);
    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log("Error in checkAuth ", error);
    res.status(400).json({ success: false, message: error.message });
  }
};
