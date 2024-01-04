/**
 * @format
 */

// Snapshot Update commands
// npm test App.test.tsx -- -u

// test || it || describe (All are same methods)

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shipped with jest.
import {it, test} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const snapshot = renderer.create(<App />).toJSON();
  console.log('snapshot ----', snapshot);
  expect(snapshot).toMatchInlineSnapshot(`
    <View
      style={
        {
          "alignItems": "center",
          "flex": 1,
          "justifyContent": "center",
        }
      }
    >
      <Text>
        Hello Jack Boy!
      </Text>
    </View>
  `);
});
