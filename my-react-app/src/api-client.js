import axios from "axios";

import { API_SERVER_URL } from "./config.js";

export const fetchPrice = async (params) => {
    console.log("fetching price")
    console.log(params);
    const resp = await axios.get(
        `${API_SERVER_URL}/price`,
        {
            params: params
        }
    );


    console.log("after");
    console.log(resp.data.price);

    return resp.data.price;
};
