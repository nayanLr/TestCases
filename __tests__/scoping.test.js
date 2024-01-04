// let cityDatabase = [];
// let foodDatabase = [];

// function initializeCityDatabase() {
//   cityDatabase = ['Vienna', 'San Juan'];
// }

// function initializeFoodDatabase() {
//   foodDatabase = {
//     Vienna: 'Wiener Schnitzel',
//     'San Juan': 'Mofongo',
//   };
// }

// function isCity(city) {
//   return cityDatabase.includes(city);
// }

// function isValidCityFoodPair(city, food) {
//   return foodDatabase[city] === food;
// }

// // Applies to all tests in this file
// beforeEach(() => {
//   return initializeCityDatabase();
// });

// test('city database has Vienna', () => {
//   expect(isCity('Vienna')).toBeTruthy();
// });

// test('city database has San Juan', () => {
//   expect(isCity('San Juan')).toBeTruthy();
// });

// describe('matching cities to foods', () => {
//   // Applies only to tests in this describe block
//   beforeEach(() => {
//     return initializeFoodDatabase();
//   });

//   test('Vienna <3 veal', () => {
//     expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
//   });

//   test('San Juan <3 plantains', () => {
//     expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
//   });
// });

// ----------------------------------------------------------------

beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeAll(() => console.log('2 - beforeAll'));
  afterAll(() => console.log('2 - afterAll'));
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

// 1 - beforeAll
// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 2 - beforeAll
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach
// 2 - afterAll
// 1 - afterAll
