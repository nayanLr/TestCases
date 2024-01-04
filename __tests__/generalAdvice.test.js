/**
 * If found any test.only test cases in file where jets test only test case.
 * Others are ignored
 **/

test('this will be the only test that runs', () => {
  expect(true).toBe(true);
});

test.only('this test will not run', () => {
  expect('A').toBe('A');
});

test('this test will not run 1', () => {
  expect('A').toBe('A');
});

// ----------------------------------------------------------------

// beforeEach(() => console.log('connection setup'));
// beforeEach(() => console.log('database setup'));

// afterEach(() => console.log('database teardown'));
// afterEach(() => console.log('connection teardown'));

// test('test 1', () => console.log('test 1'));

// describe('extra', () => {
//   beforeEach(() => console.log('extra database setup'));
//   afterEach(() => console.log('extra database teardown'));

//   test('test 2', () => console.log('test 2'));
// });
