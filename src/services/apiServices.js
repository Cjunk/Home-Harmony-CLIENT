// apiServices.js
import axios from "axios";

const fetchLocationData = async () => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_EXPRESS_SERVER_URL}/secure/inventory/masterlocation/list`, {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
                sessionID: "sessionID" + encodeURIComponent(document.cookie),
            },
        }
        );
        return response; // Return the response for further handling
    } catch (error) {
        throw error; // Rethrow the error to be handled where the function is called
    }
};

const getData = async () => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_EXPRESS_SERVER_URL}/secure/inventory/soh`, {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
                sessionID: "sessionID" + encodeURIComponent(document.cookie),
            },
        }
        );
        return response; // Return the response for further handling
    } catch (error) {
        throw error; // Rethrow the error to be handled where the function is called
    }
};

export { fetchLocationData, getData };
