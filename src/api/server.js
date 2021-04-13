export default async function makeRequest(url, body = null, method = "GET") {
  let response = null;
  try {
    if (method === "GET") {
      response = await fetch(url);
    } else {
      response = await fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
    }
    return await response.json();
  } catch (e) {
    console.error(e);
  }
}
