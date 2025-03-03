// server/api.js
import express from 'express';
import cors from 'cors';

const router = express.Router();

// Mock database
const services = [
  { id: 1, name: 'Advanced Pedicure', price: 65, duration: 75 },
  { id: 2, name: 'Masterclass Enrollment', price: 499, duration: 0 }
];

// Authentication middleware
const authenticate = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== process.env.NAILAIDE_API_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

// API Endpoints
router.get('/services', authenticate, (req, res) => {
  res.json(services);
});

router.post('/bookings', authenticate, (req, res) => {
  // Process booking logic
  res.json({ success: true, bookingId: Date.now() });
});

export default router;
