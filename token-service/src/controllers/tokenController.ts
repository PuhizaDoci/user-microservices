import { Request, Response } from 'express';
import tokenService from '../services/tokenService';

const generateToken = async (req: Request, res: Response) => {
  try {
    const token = await tokenService.generateToken(req.body);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export default {
  generateToken,
};
