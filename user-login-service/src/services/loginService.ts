import axios from 'axios';
import bcrypt from 'bcryptjs';

// Token Service and Log Service endpoints
const tokenServiceUrl = 'http://localhost:3003/api/token/generate'; // Replace with your Token service endpoint
const logServiceUrl = 'http://localhost:3005/api/log'; // Replace with your Log service endpoint

const loginUser = async (userData: { email: string; password: string; }) => {
  try {
    const response = await axios.get(`http://localhost:3000/users/${userData.email}`);
    const user = response.data;

    if (!user) {
        throw new Error('User not found');
    }

    const isValidPassword = await bcrypt.compare(userData.password, user.password);
    if (!isValidPassword) {
        throw new Error('Invalid password');
    }

    // Generate token
    const { data } = await axios.post(tokenServiceUrl, { userId: user.id });
    // Log successful login
    await axios.post(logServiceUrl, {
        message: `User logged in: ${userData.email}`,
        level: 'info',
    });

    return { user, token: data.token };
  } catch (error) {
    await axios.post(logServiceUrl, {
        message: `Unsuccessful login attempt: ${userData.email}`,
        level: 'error',
        error: (error as Error).message,
      });
  
    throw error;
  }
};

export default {
  loginUser
};
