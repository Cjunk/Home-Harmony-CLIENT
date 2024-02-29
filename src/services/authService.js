/*
    For API calls

*/
import axios from 'axios'; // Import Axios
const API_BASE_URL = process.env.REACT_APP_EXPRESS_SERVER_URL
// Logout function
export const logout = () => {
    return axios.post(`${API_BASE_URL}/logout`, {}, {
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
        },
    });
};

export const getLocations = () => {
    return axios.get(`${API_BASE_URL}/secure/inventory/masterlocation/list`, {}, { withCredentials: true });
}
