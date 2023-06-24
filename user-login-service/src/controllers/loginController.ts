import { Request, Response } from 'express';
import loginService from '../services/loginService';

const loginUser = async (req: Request, res: Response) => {
  try {
    const token = await loginService.loginUser(req.body);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export default {
  loginUser,
};
