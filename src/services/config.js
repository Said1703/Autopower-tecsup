const baseUrl = "https://6535829ec620ba9358ec86bd.mockapi.io/:endpoint"

export async function makeHttpRequest({ url, id, body, method = "GET" }) {
    const finalUrl = id ? `${url}/${id}` : url;
  
    const response = await fetch(`${baseUrl}${finalUrl}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  
    const data = await response.json();
  
    return data;
  }