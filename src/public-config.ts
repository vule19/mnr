export const PORT = parseInt(process.env.PORT ?? "8080", 10);
export const HOST = process.env.HOST ?? "localhost";

export const API_SERVER_URL = `http://${HOST}:${PORT}/api`;
