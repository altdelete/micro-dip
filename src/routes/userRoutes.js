import express from 'express';
import { register, login } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';
import { authorize } from '../middleware/roleMiddleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// User profile route
router.get('/profile', protect, (req, res) => {
    res.json({
        id: req.user._id,
        username: req.user.username,
        roles: req.user.roles,
    });
});

// Protected route example
router.get('/protected', protect, (req, res) => {
    res.json({ message: 'This is a protected route' });
});

// Admin route example
router.get('/admin', protect, authorize(['admin']), (req, res) => {
    res.json({ message: 'Admin access granted' });
});

export default router;