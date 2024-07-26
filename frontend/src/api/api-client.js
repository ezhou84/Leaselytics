import axios from "axios";

import { API_SERVER_URL } from "../config.js";

export const fetchPrice = async (params) => {
    const res = await axios.get(
        `${API_SERVER_URL}/price`,
        params
    );

    return res.data;
};
