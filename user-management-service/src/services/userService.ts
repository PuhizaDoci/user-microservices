import User from '../models/User';
import bcrypt from 'bcryptjs';

const getUserById = async (id: string) => {
  try {
    const user = await User.findByPk(id);
    return user;
  } catch (error) {
    throw error;
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw error;
  }
};

const updateUser = async (id: string, data: object) => {
  try {
    const user = await User.findByPk(id);

    if (!user) {
      throw new Error('User not found');
    }

    await user.update(data);
    return user;
  } catch (error) {
    throw error;
  }
};

const updatePassword = async (id: string, password: string) => {
  try {
    const user = await User.findByPk(id);

    if (!user) {
      throw new Error('User not found');
    }

    const hashedPassword = bcrypt.hashSync(password, 8);
    await user.update({ password: hashedPassword });
    return user;
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (id: string) => {
  try {
    const user = await User.findByPk(id);

    if (!user) {
      throw new Error('User not found');
    }

    await user.destroy();
    return { message: 'User deleted successfully' };
  } catch (error) {
    throw error;
  }
};

export default {
  getUserById,
  getAllUsers,
  updateUser,
  updatePassword,
  deleteUser,
};
