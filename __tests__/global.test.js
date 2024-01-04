/**
 * 1. afterAll(fn,timeout) - Run this function after all the tests in this file have completed.
 */

const globalDatabase = makeGlobalDatabase();

function cleanUpDatabase(db) {
  db.cleanUp();
}

afterAll(() => {
  console.log('Clean Up');
  cleanUpDatabase(globalDatabase);
});

function makeGlobalDatabase() {
  return {
    cleanUp: jest.fn(),
    find: jest.fn(),
    insert: jest.fn(),
  };
}

// function makeThing() {
//   return {name: 'Test Thing', description: 'A test thing for the database'};
// }

test('Find the case', () => {
  globalDatabase.find.mockImplementation((collection, query, callback) => {
    console.log('collection ---', collection);
    const data = [{name: 'jack'}, {name: 'bar'}];
    callback(data);
  });

  globalDatabase.find('caseOne', {}, response => {});
});
