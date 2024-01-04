import {describe, expect, test} from '@jest/globals';
const data = {one: 1};

test('object assignment', () => {
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});
