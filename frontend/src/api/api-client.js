import axios from "axios";

import { API_SERVER_URL } from "../config.js";

export const fetchPrice = async (params) => {
    console.log(API_SERVER_URL);
    const url = `${API_SERVER_URL}/price`;
    console.log(url);
    console.log(params);
    const res = await axios.get(
        url,
        params
    );

    return res.data;
};
