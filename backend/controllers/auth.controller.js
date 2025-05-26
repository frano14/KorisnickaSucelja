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
    //generateTokenAndSetCookie(res, user._id);
    
    // MAILTRAP - Demo verzija
    //Zbog demo verzje radi samo na frano.gugic8@gmail.com

    //await sendPasswordEmail(user.email, user.password);

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

export const allUsers = async (req, res) => {
    const users = await User.find({ isPshy: false });
    res.json(users); 
}

export const checkAuth = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log("Error in checkAuth ", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

export const sessionCreate = async (req, res) => {
  try {
    const { date } = req.body;  

    const user = await User.findById(req.userId).select("-password");
   
    const userPshy = await User.findOne({ isPshy: true });

    user.sessions.push(new Date(date));
    userPshy.sessions.push(new Date(date));

    await user.save();
    await userPshy.save();

    return res.status(200).json({ message: 'Sesija uspešno kreirana', user, userPshy });
  } catch (error) {
    console.error('Greška prilikom kreiranja sesije:', error);
    return res.status(500).json({ message: 'Došlo je do greške na serveru' });
  }
};

export const getAllSessions = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: 'Korisnik nije pronađen' });
    }
    console.log("IME USERA", user);
    console.log("OVI DOGADJAJI MALI",  user.sessions);
    return res.status(200).json({
      userSessions: user.sessions || [],
    });
  } catch (error) {
    console.error("Greška prilikom dohvatanja sesija:", error);
    return res.status(500).json({ message: "Došlo je do greške na serveru" });
  }
};
