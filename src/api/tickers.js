import makeRequest from "./server";
const url = "http://localhost:3000/tickets";

export const getAllTickers = async () => await makeRequest(url);
export const setTicket = async (body, method) =>
  await makeRequest(url, body, method);
