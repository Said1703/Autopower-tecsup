export const BASE_URL = "http://127.0.0.1:8000/api/v1/";

export async function makeHttpRequest({ url, id, body, method = "GET" }) {
    const finalUrl = id ? `${url}/${id}` : url;

    const response = await fetch(`${BASE_URL}${finalUrl}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("access_token")}`
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  return data;
}