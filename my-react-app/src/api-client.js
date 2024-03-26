import axios from "axios";

import { API_SERVER_URL } from "./config.js";

export const fetchPrice = async (params) => {
    const resp = await axios.get(
        `${API_SERVER_URL}/price`,
        {
            params: params
        }
    );

    return resp.data.price;
};
