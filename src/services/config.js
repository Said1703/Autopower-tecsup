export const BASE_URL = "http://127.0.0.1:8000/api/v1/";

export async function makeHttpRequest({ url, id, body, method = "GET" }) {
    const finalUrl = id ? `${url}/${id}` : url;

    const response = await fetch(`${BASE_URL}${finalUrl}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    return {
      ok:false,
      data: "Error"
    }
  }

  
  const data = await response.json();

  return data;
}