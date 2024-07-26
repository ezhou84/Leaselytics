export const PORT = process.env.PORT ?? "8080";
export const HOST = process.env.HOST ?? "localhost";

export const API_SERVER_URL = process.env.NODE_ENV === "production" ? "https://leaselytics-backend.vercel.app/api" : `http://${HOST}:${PORT}/api`;
