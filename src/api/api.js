import axios from 'axios';

// Base URL for the API
const API_BASE_URL = 'https://soufianesejjari-middlware.hf.space';

// Function to fetch profile data based on ID
export const fetchProfileData = async (profileId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/profile/${profileId}`);
    console.log('Profile data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching profile data:', error);
    throw error;
  }
};
