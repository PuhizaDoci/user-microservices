import { Request, Response } from 'express';
import userService from '../services/userService';

const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

const updatePassword = async (req: Request, res: Response) => {
  try {
    const user = await userService.updatePassword(req.params.id, req.body.password);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const response = await userService.deleteUser(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export default {
  getUserById,
  getAllUsers,
  updateUser,
  updatePassword,
  deleteUser,
};
