import jwt, { JwtPayload } from 'jsonwebtoken';
import User from '../models/user';

interface UserPayload extends JwtPayload {
  userId: number;
}

const secret = 'SECRET_KEY'; // Please replace this with a stronger secret and store it securely

const generateToken = async (userId: number) => {
  const token = jwt.sign({ userId }, secret, { expiresIn: '1h' });
  return token;
};

const validateToken = async (token: string) => {
  try {
    const decoded = jwt.verify(token, secret) as UserPayload;
    const user = await User.findByPk(decoded.userId);
    if (!user) {
      throw new Error('User not found');
    }
    return { valid: true, userId: decoded.userId };
  } catch (err) {
    return { valid: false, error: (err as Error).message };
  }
};

export default {
  generateToken,
  validateToken,
};
