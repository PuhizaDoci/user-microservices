import express from 'express';
import tokenService from '../services/tokenService';

const router = express.Router();

router.post('/generate', async (req, res) => {
  const { userId } = req.body;
  try {
    const token = await tokenService.generateToken(userId);
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Error generating token' });
  }
});

router.post('/validate', async (req, res) => {
  const { token } = req.body;
  try {
    const result = await tokenService.validateToken(token);
    if (result.valid) {
      res.status(200).json({ valid: true });
    } else {
      res.status(401).json({ valid: false, error: result.error });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error validating token' });
  }
});

export default router;
