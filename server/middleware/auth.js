import jwt from 'jsonwebtoken';

export const authenticate = (req, res, next) => {
  try {
    // API Key Validation
    const apiKey = req.headers['x-api-key'];
    if (apiKey !== process.env.8048717a-c465-41dc-8fbe-53cad1fb1c48) {
      return res.status(401).json({ error: 'Invalid API key' });
    }

    // JWT Validation for Endpoints
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: 'Authorization token required' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Authentication failed' });
  }
};
