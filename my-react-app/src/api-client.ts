import axios from "axios";

import { API_SERVER_URL } from "./config";

export const fetchPrice = async (params: {
    neighbourhood: string,
    city: string,
    bedrooms: number,
    bathrooms: number,
    area: number
}) => {
    const resp = await axios.get(
        `${API_SERVER_URL}/price`,
        { params }
    );

    return resp.data.price;
}
