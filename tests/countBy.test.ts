import { test, describe } from 'node:test';
import * as assert from 'node:assert';

import { countBy } from '../src';

describe('countBy', () => {
  test('empty mapper', () => {
    const input = { one: 1, two: 2, three: 3, four: 4, five: 5 };
    const results = countBy(input);
  assert.deepStrictEqual(results, { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 });
  });

  test('check values', () => {
    const input = { one: 1, two: 2, three: 3, four: 4, five: 5 };
    const results = countBy(input, (a) => String(a % 2));
  assert.deepStrictEqual(results, { 1: 3, 0: 2 });
  });

  test('check keys', () => {
    const input = { one: 1, two: 2, three: 3, four: 4, five: 5 };
    const results = countBy(input, (_, b) => b.length);
  assert.deepStrictEqual(results, { 3: 2, 4: 2, 5: 1 });
  });
});
