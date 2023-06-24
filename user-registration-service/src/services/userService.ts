import User from "../models/user";
import axios from 'axios';

const logServiceUrl = 'http://localhost:3005/api/logs'; // Replace with your Log service endpoint

const registerUser = async (userData: { email: string; password: string; }) => {
  try {
    const user = await User.create(userData);
    
    // Send log to Log service
    await axios.post(logServiceUrl, {
      message: `New user registered: ${userData.email}`,
      level: 'info',
    });
    return user;
  } catch (error) {
    await axios.post(logServiceUrl, {
      message: `Unsuccessful register attempt: ${userData.email}`,
      level: 'error',
    });
    throw error;
  }
};

const getUserByEmail = async (email: string) => {
try {
    const user = await User.findOne({ where: { email } });
    return user;
} catch (error) {
  await axios.post(logServiceUrl, {
    message: `Unsuccessful get attempt: ${email}`,
    level: 'warn',
  });
    throw error;
}
};

export default {
  registerUser,
  getUserByEmail
};
