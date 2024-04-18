import axios from "axios";

import { API_SERVER_URL } from "./config.js";

export const fetchPrice = async (params) => {
    console.log("fetching price")
    console.log(params);
    const res = await axios.post(
        `${API_SERVER_URL}/price`,
        params
    );

    return res.data;
};
