import * as assert from 'node:assert';
import { describe, test } from 'node:test';

import { set } from '../src/index.js';

describe('set', () => {
  test('set flat', () => {
    const input = { one: 1, two: 2 };
    const results = set(input, 'three', 3);
    assert.deepStrictEqual(results, {
      one: 1,
      two: 2,
      three: 3,
    });
  });

  test('set deep values', () => {
    const input = { one: 1, two: 2 };
    const results = set(input, 'three.four', 4);
    assert.deepStrictEqual(results, {
      one: 1,
      two: 2,
      three: {
        four: 4,
      },
    });
  });

  test('set deep values with array', () => {
    const input = { one: 1, two: 2 };
    const results = set(input, ['three', 'four'], 4);
    assert.deepStrictEqual(results, {
      one: 1,
      two: 2,
      three: {
        four: 4,
      },
    });
  });
});
