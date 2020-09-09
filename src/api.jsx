import axios from 'axios'

export const getProfiles = async (url) => {
    try {
        const resp = await axios.get(url);
        return resp.data;
    } catch (err) {
        // Handle Error Here
        return err;
    }
};


