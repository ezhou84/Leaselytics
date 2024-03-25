import axios from "axios";

import { API_SERVER_URL } from "./config.ts";

export const fetchPrice = async (params) => {
    const resp = await axios.get(
        `${API_SERVER_URL}/price`,
        { params }
    );

    return resp.data.price;
};
