// Promises;
async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  return data;
}

// Async / Await;
describe('APIs calling and checking data', () => {
  test('APIS Calling Data', () => {
    return fetchData().then(data => {
      expect(data).toEqual({
        completed: false,
        id: 1,
        title: 'delectus aut autem',
        userId: 1,
      });
    });
  });
});

// Callbacks;
describe('CallBack Implementation', () => {
  test('CallBack throw data handle ', () => {
    function Callbacks(error, data) {
      if (error) {
        throw error;
      }
      expect(data).toEqual({
        completed: false,
        id: 1,
        title: 'delectus aut autem',
        userId: 1,
      });
    }

    fetchData(Callbacks);
  });
});

// Promises;
describe('Callback resolves 1', () => {
  test('Resolves Condition', () => {
    return expect(fetchData()).resolves.toEqual({
      completed: false,
      id: 1,
      title: 'delectus aut autem',
      userId: 1,
    });
  });
});
