import {describe, expect, test} from '@jest/globals';

function fun(a, b, c) {
  console.log('Fun Function Value ---', a + b + c);
  return a + b + c;
}

function checkPrime(value) {
  let isPrime = true;
  if (value === 1) {
    console.log('1 is neither prime nor composite number.');
  } else if (value > 1) {
    for (let i = 2; i < value; i++) {
      if (value % i === 0) {
        isPrime = false;
        break;
      }
    }
  }

  if (isPrime) {
    console.log(`${value} is a prime number`);
  } else {
    console.log(`${value} is not prime number`);
  }
}

let objectAssign = {first: 1, second: 2};

// Checking function return value using toBe() method.
describe('Calling fun function', () => {
  test('Checking sum function using toBe() method', () => {
    expect(fun(10, 20, 30)).toBe(60);
  });

  test('Checking sum function using not.toBe() method', () => {
    expect(fun(10, 20, 10)).not.toBe(80);
  });
});

// Checking console.log() for function return eject value using toHaveBeenCalledWith() method.
describe('Calling checkPrime function', () => {
  test('Prime number checking value using toHaveBeenCalledWith method 1', () => {
    let primeNumber = 23;
    console.log = jest.fn();
    checkPrime(primeNumber);
    expect(console.log).toHaveBeenCalledWith(
      `${primeNumber} is a prime number`,
    );
  });

  test('Prime number checking value using toHaveBeenCalledWith method 2', () => {
    let primeNumber = 4;
    console.log = jest.fn();
    checkPrime(primeNumber);
    expect(console.log).toHaveBeenCalledWith(
      `${primeNumber} is not prime number`,
    );
  });

  test('Prime number checking value using toHaveBeenCalledWith method 3', () => {
    let primeNumber = 1;
    console.log = jest.fn();
    checkPrime(primeNumber);
    expect(console.log).toHaveBeenCalledWith(
      `1 is neither prime nor composite number.`,
    );
  });

  test('Prime number checking value using not.toHaveBeenCalledWith 4', () => {
    let primeNumber = 23;
    console.log = jest.fn();
    checkPrime(primeNumber);
    expect(console.log).not.toHaveBeenCalledWith(
      `${primeNumber} is not prime number`,
    );
  });
});

// Checking Object values using toEqual() method.
describe('Object Assign', () => {
  test('Object Value toEqual Method ', () => {
    objectAssign['third'] = 3;
    console.log('Added Item After ObjectAssign', objectAssign);
    expect(objectAssign).toEqual({
      first: 1,
      second: 2,
      third: 3,
    });
  });

  test('Object Value not.toEqual Method ', () => {
    objectAssign['fourth'] = 4;
    console.log('Added Item After ObjectAssign', objectAssign);
    expect(objectAssign).not.toEqual({
      first: 1,
      second: 2,
      third: 3,
      fourth: 4,
      fifth: 5,
    });
  });
});

// Truthiness Value checking
describe('Value Checker', () => {
  test('Null Value checking', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  test('String Value checking', () => {
    const name = 'Jack';
    expect(name).not.toBeNull();
    expect(name).toBeDefined();
    expect(name).not.toBeUndefined();
    expect(name).toBeTruthy();
    expect(name).not.toBeFalsy();
  });

  test('Number Value checking', () => {
    const value = 10;
    expect(value).not.toBeNull();
    expect(value).toBeDefined();
    expect(value).not.toBeUndefined();
    expect(value).toBeTruthy();
    expect(value).not.toBeFalsy();
  });

  test('Undefined Value checking', () => {
    const undef = undefined;
    expect(undef).not.toBeNull();
    // expect(undef).toBeNull();
    // expect(undef).toBeDefined();
    // expect(undef).not.toBeUndefined();
    expect(undef).not.toBeTruthy();
    expect(undef).toBeFalsy();
  });
});

// Numbers
describe('Number Checking', () => {
  test('Number Checking', () => {
    const num = 10 + 7;
    expect(num).toBeGreaterThan(15);
    expect(num).toBeLessThan(20);
    expect(num).toBeGreaterThanOrEqual(16);
    expect(num).toBeLessThanOrEqual(18);

    // toBe and toEqual are equivalent for numbers
    expect(num).toBe(17);
    expect(num).toEqual(17);
  });

  test('Float Number checking', () => {
    const value = 0.1 + 0.2;
    // expect(value).toBe(0.3); // This won't work because of rounding error [0.30000000000000004]
    expect(value).toBeCloseTo(0.3); // This works
  });
});

// String Matches
describe('String Matches', () => {
  test('String checking using toMatch()', () => {
    expect('hey! my name is jack').toMatch(/ack/);
  });

  test('String checking using not.toMatch()', () => {
    expect('hey! my name is jack').not.toMatch(/is ryan/);
  });
});

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

// Arrays and iterables
describe('Arrays and iterables', () => {
  test('Arrays Method checking using toContain()', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
  });
});

function compileAndroidCode() {
  throw new Error('you are using the wrong JDK!');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use a string that must be contained in the error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);

  // Or you can match an exact error message using a regexp like below
  //   expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
});

// Mock Function Implementation

/**
 * In Jest, mockImplementation is a method that you can use to define a custom implementation for a mocked function. This method allows you to replace the default behavior of a mocked function with your own logic for testing purposes.
 */

const getUserDetails = jest.fn();

getUserDetails.mockImplementation((collection, query, callback) => {
  return 'User are not available!';
});

const results = getUserDetails();
console.log('results ---', results);
