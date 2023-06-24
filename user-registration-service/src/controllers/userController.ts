import { Request, Response } from 'express';
import userService from '../services/userService';

const registerUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.registerUser(req.body);
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

const getUserByEmail = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUserByEmail(req.params.email);
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export default {
  registerUser,
  getUserByEmail,
};
