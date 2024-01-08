// https://jestjs.io/docs/api

/**
 * @afterAll Runs a function after all the tests in this file have completed. If the function returns a promise or is a generator, Jest waits for that promise to resolve before continuing.
 * afterAll(fn, timeout)
 */

// let cityData = ["New York", "Virginia", "Washington"];

// function clearCityData() {
//   cityData = [];
// }

// afterAll(() => {
//   clearCityData();
//   console.log("Clearning...");
// });

// function isCity(city) {
//   return cityData.includes(city);
// }

// describe("AfterAll method checking", () => {
//   it("Check city data", () => {
//     expect(isCity("Virginia")).toBeTruthy();
//   });
// });

/**
 * @afterEach Runs a function after each one of the tests in this file completes. If the function returns a promise or is a generator, Jest waits for that promise to resolve before continuing.
 * afterEach(fn, timeout)
 */

// let cityData = ["New York", "Virginia", "Washington"];

// function clearCityData() {
//   cityData = [];
// }

// afterEach(() => {
//   clearCityData();
//   console.log("Clearning...");
// });

// function isCity(city) {
//   return cityData.includes(city);
// }

// describe("AfterEach method checking", () => {
//   it("Check city data", () => {
//     expect(isCity("Virginia")).toBeTruthy();
//   });
// });

/**
 * @beforeAll Runs a function before any of the tests in this file run. If the function returns a promise or is a generator, Jest waits for that promise to resolve before running tests.
 * beforeAll(fn, timeout)
 */

// let cityData = [];

// function initializeCityDatabase() {
//   cityData = ["Vienna", "San Juan"];
// }

// function clearCityData() {
//   cityData = [];
// }

// beforeAll(() => {
//   initializeCityDatabase();
// });

// afterEach(() => {
//   clearCityData();
//   console.log("Clearning...");
// });

// function isCity(city) {
//   return cityData.includes(city);
// }

// describe("beforeAll method checking", () => {
//   it("Check city data", () => {
//     expect(isCity("Vienna")).toBeTruthy();
//   });
// });

/**
 * @beforeEach Runs a function before each of the tests in this file runs. If the function returns a promise or is a generator, Jest waits for that promise to resolve before running the test.
 * beforeEach(fn, timeout)
 */

// let cityData = [];

// function initializeCityDatabase() {
//   cityData = ["Vienna", "San Juan"];
// }

// function clearCityData() {
//   cityData = [];
// }

// beforeEach(() => {
//   initializeCityDatabase();
// });

// afterEach(() => {
//   clearCityData();
//   console.log("Clearning...");
// });

// function isCity(city) {
//   return cityData.includes(city);
// }

// describe("beforeAll method checking", () => {
//   it("Check city data", () => {
//     expect(isCity("Vienna")).toBeTruthy();
//   });
// });

/**
 * @describeEach Use describe.each if you keep duplicating the same test suites with different data. describe.each allows you to write the test suite once and pass data in.
 * describe.each(table)(name,fn,timeout)
 * @testEach || @itEach
 */

// describe.each([
//   [1, 1, 2],
//   [1, 2, 3],
//   [2, 1, 3],
// ])(".add(%i, %i)", (a, b, expected) => {
//   test(`returns ${expected}`, () => {
//     expect(a + b).toBe(expected);
//   });

//   test(`returned value not be greater than ${expected}`, () => {
//     expect(a + b).not.toBeGreaterThan(expected);
//   });

//   test(`returned value not be less than ${expected}`, () => {
//     expect(a + b).not.toBeLessThan(expected);
//   });
// });

// ----------------------------------------------------------------

// describe.each([
//   { a: 1, b: 1, expected: 2 },
//   { a: 1, b: 2, expected: 3 },
//   { a: 2, b: 1, expected: 3 },
// ])(".adding($a, $b)", ({ a, b, expected }) => {
//   test(`returns ${expected}`, () => {
//     expect(a + b).toBe(expected);
//   });

//   test(`returned value not be greater than ${expected}`, () => {
//     expect(a + b).not.toBeGreaterThan(expected);
//   });

//   test(`returned value not be less than ${expected}`, () => {
//     expect(a + b).not.toBeLessThan(expected);
//   });
// });

/**
 * @describeOnly You can use describe.only if you want to run only one describe block:
 * describe.only(name, fn)
 * @testOnly You can use test.only if you want to run only one test block:
 * @itOnly You can use it.only if you want to run only one it block:
 * @describeSkip You can use describe.skip if you want to skip only one describe block:
 * @testSkip You can use test.skip if you want to Skip only one test block:
 * @itSkip You can use it.skip if you want to skip only one it block:
 */

describe.only("Describe only method", () => {
  test.only("10 + 20 = 30", () => {
    expect(10 + 20).toBe(30);
  });

  test("15 + 10 = 25", () => {
    expect(15 + 10).toBe(25);
  });

  it.only("10 - 2 = 8", () => {
    expect(10 - 2).toBe(8);
  });
});

describe("Normal describe method", () => {
  test("1 + 2 = 3", () => {
    expect(1 + 2).toBe(3);
  });
});

test.todo("add should be associative");
