import { body } from 'express-validator';

export const messageValidation = [
  body('message')
    .trim()
    .escape()
    .isLength({ min: 1, max: 500 })
    .withMessage('Message must be between 1-500 characters'),
  body('sessionId')
    .isUUID()
    .withMessage('Invalid session ID format')
];
