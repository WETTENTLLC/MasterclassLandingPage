import express from 'express';
import cors from 'cors';
import { authenticate } from './middleware/auth.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Security Headers
app.use(helmet());
app.disable('x-powered-by');

// CORS Configuration
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS.split(','),
  methods: ['GET', 'POST', 'PUT'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-API-Key'],
  credentials: true
}));

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// Protected Routes
app.post('/api/v1/message', authenticate, (req, res) => {
  // Your secure message handling
});

// Token Generation Endpoint
app.post('/api/v1/login', (req, res) => {
  const user = { id: 1, role: 'admin' }; // Replace with actual user lookup
  const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});
