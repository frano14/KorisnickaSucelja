import express from 'express';
import { signup, login, logout, checkAuth, allUsers, sessionCreate, getAllSessions } from '../controllers/auth.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.get("/check-auth", verifyToken, checkAuth);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/allUsers", allUsers);
router.post("/session", verifyToken, sessionCreate)
router.post("/allSessions", verifyToken , getAllSessions)

export default router;