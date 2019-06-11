export const fetchUsers = async (url) => {
  const resp = await fetch(url);
  const body = await resp.text();
  return JSON.parse(body);
}
