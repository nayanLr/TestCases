// https://jestjs.io/docs/api

const { fetchData } = require("./async");

/**
 * @Promises Return a promise from your test, and Jest will wait for that promise to resolve. If the promise is rejected, the test will fail.
 * @then
 */

describe("Promises uses to call api", () => {
  it("APIS calling data", () => {
    return fetchData().then((data) => {
      expect(data).toEqual({
        completed: false,
        id: 1,
        title: "delectus aut autem",
        userId: 1,
      });
    });
  });
});

/**
 * @AsyncAwait Alternatively, you can use async and await in your tests. To write an async test, use the async keyword in front of the function passed to test. For example, the same fetchData scenario can be tested with
 */

describe("Async await uses to call api", () => {
  it("APIS calling data", async () => {
    try {
      const data = await fetchData();
      expect(data).toEqual({
        completed: false,
        id: 1,
        title: "delectus aut autem",
        userId: 1,
      });
    } catch (error) {
      console.log("Api callng error", error);
    }
  });
});

/**
 * You can combine @async and @await with .resolves or .rejects.
 */

describe("Async await with resolves and rejects", () => {
  it("APIS calling data", async () => {
    try {
      await expect(fetchData()).resolves.toEqual({
        completed: false,
        id: 1,
        title: "delectus aut autem",
        userId: 1,
      });
    } catch (error) {}
  });
});

/**
 * @Callback If you don't use promises, you can use callbacks. For example, let's say that fetchData, instead of returning a promise, expects a callback.
 * By default, Jest tests complete once they reach the end of their execution.
 */

function callBackFun(callback) {
  setTimeout(() => {
    const data = "peanut butter";
    callback(null, data);
  }, 1000);
}

describe("Callback uses to call api", () => {
  it("APIS calling data", (responseData) => {
    function getUserData(err, data) {
      if (err) {
        responseData(err);
      }

      try {
        expect(data).toBe("peanut butter");
        responseData();
      } catch (error) {
        responseData(error);
      }
    }
    callBackFun(getUserData);
  });
});
