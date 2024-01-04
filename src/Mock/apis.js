export async function fetchUserData(userId) {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${userId}`,
  ).then(response => response.json());

  return data;
}
