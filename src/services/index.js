const URLapi = "https://653d54fff52310ee6a9a19b6.mockapi.io/";

export async function create(body, url) {
  const response = await fetch(URLapi + url, {
    method: "POST",
    body:JSON.stringify(body),
    headers:{"Content-type": "application/json"}
  });

  const data = await response.json()

  return data;
}