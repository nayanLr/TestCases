/**
 * 1. What is Teardown
 * - Often while writing tests, you have some setup work that needs to happen before the tests run, and you have some finishing work that needs to happen tests run.
 * - Jest provides helper functions to handle this.
 *
 * JEST PROVIDE 2 HOOKS *
 * --------------------------------
 * 1. beforeEach
 * 2. afterEach
 * 3. beforeAll - in some cases, you only need to do setup once. (Only 1 time use)
 * 4. afterAll - in some cases, you only need to do setup once. (Only 1 time use)
 * --------------------------------
 */

/**
 * Below code in initialCityDatabase was null as an consider and direct working on condition in this variable. so first data added then condition working.
 */

let cityDatabase = [];

function initializeCityDatabase() {
  cityDatabase = ['Vienna', 'San Juan'];
}

function clearCityDatabase() {
  cityDatabase = [];
}

function isCity(city) {
  return cityDatabase.includes(city);
}

// beforeEach(() => {
//   initializeCityDatabase();
// });

// afterEach(() => {
//   clearCityDatabase();
// });

beforeAll(() => {
  initializeCityDatabase();
});

afterAll(() => {
  clearCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});

test('city database has Las Vegas', () => {
  expect(isCity('Las Vegas')).not.toBeTruthy();
});
