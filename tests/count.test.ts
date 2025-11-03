import * as assert from 'node:assert';
import { describe, test } from 'node:test';

import { count } from '../src/index.js';

describe('count', () => {
  test('check values', () => {
    const input = { one: 1, two: 2, three: 3, four: 4, five: 5 };
    const results = count(input, (a) => a > 3);
    assert.deepStrictEqual(results, 2);
  });

  test('check keys', () => {
    const input = { one: 1, two: 2, three: 3, four: 4, five: 5 };
    const results = count(input, (_, b) => b?.length === 3);
    assert.deepStrictEqual(results, 2);
  });
});
