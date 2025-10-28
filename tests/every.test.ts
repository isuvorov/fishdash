import * as assert from 'node:assert';
import { describe, test } from 'node:test';

import { every } from '../src';

describe('every', () => {
  test('check values false', () => {
    const input = { one: 1, two: 2, three: 3, four: 4, five: 5 };
    const results = every(input, (a) => a > 3);
    assert.deepStrictEqual(results, false);
  });

  test('check values true', () => {
    const input = { one: 1, two: 2, three: 3, four: 4, five: 5 };
    const results = every(input, (a) => a > 0);
    assert.deepStrictEqual(results, true);
  });

  test('check keys false', () => {
    const input = { one: 1, two: 2, three: 3, four: 4, five: 5 };
    const results = every(input, (_, b) => b.length > 3);
    assert.deepStrictEqual(results, false);
  });

  test('check keys true', () => {
    const input = { one: 1, two: 2, three: 3, four: 4, five: 5 };
    const results = every(input, (_, b) => b.length > 0);
    assert.deepStrictEqual(results, true);
  });
});
