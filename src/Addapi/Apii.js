const Api="https://6549bc0ee182221f8d51d06c.mockapi.io/data";
export async function GetAllproducts() {
  const res = await fetch(Api, {
    method: "GET"
  });
  const data = await res.json();
  return data;
}