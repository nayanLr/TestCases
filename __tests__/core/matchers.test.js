// https://jestjs.io/docs/api

const { addition } = require("./matchers");

const assignObject = { name: "Jackson" };

/**
 * @toBe and @toEqual both are same things.
 * but when you deal with array and object that time to use @toEqual
 */

describe("toBe() method", () => {
  it("should add 1 + 2 equal to 3", () => {
    const add = addition(1, 2);
    expect(add).toBe(3);
  });
});

describe("should add 10 + 20 equal to 30", () => {
  it("Object assignment 1", () => {
    const objs = {};
    // expect(objs).toBe({}) // This is fail it case
    // {}, [] cases are failed so use only toEqual()
    expect(objs).toEqual({});
  });

  it("Object assignment 2", () => {
    assignObject["name"] = "William";
    expect(assignObject).toEqual({ name: "Jackson", name: "William" });
  });
});

/**
 * @Truthiness
 * @toBeNull matches only null
 * @toBeUndefined matches only undefined
 * @toBeDefined is the opposite of toBeUndefined
 * @toBeTruthy matches anything that an if statement treats as true
 * @toBeFalsy matches anything that an if statement treats as false
 */

describe("Values checking", () => {
  it("Null value check", () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  it("Zeo value check", () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });

  it("String value check", () => {
    const name = "Jack";
    expect(name).not.toBeNull();
    expect(name).toBeDefined();
    expect(name).not.toBeUndefined();
    expect(name).toBeTruthy();
    expect(name).not.toBeFalsy();
  });

  it("Number value check", () => {
    const value = 10;
    expect(value).not.toBeNull();
    expect(value).toBeDefined();
    expect(value).not.toBeUndefined();
    expect(value).toBeTruthy();
    expect(value).not.toBeFalsy();
  });

  it("Undefined value check", () => {
    const undef = undefined;
    expect(undef).not.toBeNull();
    // expect(undef).toBeNull();
    // expect(undef).toBeDefined();
    // expect(undef).not.toBeUndefined();
    expect(undef).not.toBeTruthy();
    expect(undef).toBeFalsy();
  });
});

/**
 * @Number
 * @toBeGreaterThan match only greater than of given number
 * @toBeLessThan match only less than of given number
 * @toBeGreaterThanOrEqual match only greater than or equal
 * @toBeLessThanOrEqual match only less than or equal
 */

describe("Number values Check", () => {
  it("Number Check", () => {
    const num = 10 + 7;
    expect(num).toBeGreaterThan(15);
    expect(num).toBeLessThan(20);
    expect(num).toBeGreaterThanOrEqual(16);
    expect(num).toBeLessThanOrEqual(18);

    // toBe and toEqual are equivalent for numbers
    expect(num).toBe(17);
    expect(num).toEqual(17);
  });

  it("Float Number check", () => {
    const value = 0.1 + 0.2;
    // expect(value).toBe(0.3); // This won't work because of rounding error [0.30000000000000004]
    expect(value).toBeCloseTo(0.3); // This works
  });
});

/**
 * @String
 * @toMatch matches the including in string
 * @notToMatch matches the not including in string
 */

describe("String Matches", () => {
  it("Using toMatch()", () => {
    expect("hey! my name is jack").toMatch(/ack/);
  });

  it("Using not.toMatch()", () => {
    expect("hey! my name is jack").not.toMatch(/is ryan/);
  });
});

/**
 * @ArrayAndIterables
 * @toContain checking in arrays values
 */

const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
];

describe("Array and Iterable", () => {
  it("Array in check value", () => {
    expect(shoppingList).toContain("milk");
    expect(new Set(shoppingList)).toContain("milk");
  });
});

/**
 * @Exceptions If you want to test whether a particular function throws an error when it's called, use toThrow.
 */

function compileCode() {
  throw new Error("you are using the wrong JDK!");
}

describe("Exceptions Handling", () => {
  it("Exceptions", () => {
    expect(() => compileCode()).toThrow();
    expect(() => compileCode()).toThrow(Error);

    expect(() => compileCode()).toThrow("you are using the wrong JDK");
    expect(() => compileCode()).toThrow(/JDK/);
  });
});

/**
 * @toHaveBeenCalled Use .toHaveBeenCalledWith to ensure that a mock function was called with specific arguments. The arguments are checked with the same algorithm that .toEqual uses.
 * this method will insure that the mock function is called or not.
 */

function drinkAll(callback, flavour) {
  if (flavour !== "octopus") {
    callback(flavour);
  }
}

describe("ToHaveBeenCalled Method", () => {
  it("drinks something lemon-flavoured", () => {
    const drink = jest.fn();
    drinkAll(drink, "lemon");
    expect(drink).toHaveBeenCalled();
  });

  it("drinks something octopus", () => {
    const drink = jest.fn();
    drinkAll(drink, "octopus");
    expect(drink).not.toHaveBeenCalled();
  });
});

/**
 * @toHaveBeenCalledTimes Use .toHaveBeenCalledTimes to ensure that a mock function got called exact number of times.
 */

function drinkEach(callback, drinkMenu) {
  return drinkMenu.map((item) => {
    callback(item);
  });
}

it("drinkEach drinks each drink", () => {
  const drink = jest.fn();
  // You have to already knows that the drinkEach function how many time to call,
  // Here to pass an array and in values to pass 3 numbers in toHaveBeenCalledTime.
  drinkEach(drink, ["lemon", "octopus", "pineapple"]);
  expect(drink).toHaveBeenCalledTimes(3);
});

/**
 * @toHaveProperty Use .toHaveProperty to check if property at provided reference keyPath exists for an object. For checking deeply nested properties in an object you may use dot notation or an array containing the keyPath for deep references.
 *
 * toHaveProperty(key, value)
 */

const houseForSale = {
  bath: true,
  bedrooms: 4,
  kitchen: {
    amenities: ["oven", "stove", "washer"],
    area: 20,
    wallColor: "white",
    "nice.oven": true,
  },
  livingRoom: {
    amenities: [
      {
        couch: [
          ["large", { dimensions: [20, 20] }],
          ["small", { dimensions: [10, 10] }],
        ],
      },
    ],
  },
  "ceiling.height": 2,
};

describe("toHaveProperty Check", () => {
  it("this house has my desired features", () => {
    expect(houseForSale).toHaveProperty("bath");
    expect(houseForSale).toHaveProperty("bedrooms", 4);
    expect(houseForSale).not.toHaveProperty("pool");

    expect(houseForSale).toHaveProperty("kitchen.area", 20);
    expect(houseForSale).toHaveProperty("kitchen.amenities", [
      "oven",
      "stove",
      "washer",
    ]);

    expect(houseForSale).not.toHaveProperty("kitchen.open");

    expect(houseForSale).toHaveProperty(["kitchen", "area"], 20);
    expect(houseForSale).toHaveProperty(
      ["kitchen", "amenities"],
      ["oven", "stove", "washer"]
    );
    expect(houseForSale).toHaveProperty(["kitchen", "amenities", 0], "oven");
    expect(houseForSale).toHaveProperty(
      "livingRoom.amenities[0].couch[0][1].dimensions[0]",
      20
    );
    expect(houseForSale).toHaveProperty(["kitchen", "nice.oven"]);
    expect(houseForSale).not.toHaveProperty(["kitchen", "open"]);

    expect(houseForSale).not.toHaveProperty(["ceiling.height"], "tall");
  });
});

/**
 * @toBeCloseTo Use toBeCloseTo to compare floating point numbers for approximate equality.
 *
 * toBeCloseTo(number, numDigits?)
 */

describe("toBeCloseTo check", () => {
  it("adding works sanely with decimals", () => {
    expect(0.2 + 0.1).toBeCloseTo(0.3, 5);
  });
});
