import * as assert from 'node:assert';
import { describe, test } from 'node:test';

import { sortBy } from '../src';

describe('sortBy', () => {
  test('empty', () => {
    const input = [];
    const results = sortBy(input, (a) => a.value);
    assert.deepStrictEqual(results, []);
  });

  test('1,2,3', () => {
    const input = [
      { i: 1, value: 1 },
      { i: 2, value: 2 },
      { i: 3, value: 3 },
      { i: 4, value: 1 },
      { i: 5, value: 2 },
      { i: 6, value: 3 },
    ];
    const results = sortBy(input, (a) => a.value);
    assert.deepStrictEqual(results, [
      { i: 1, value: 1 },
      { i: 4, value: 1 },
      { i: 2, value: 2 },
      { i: 5, value: 2 },
      { i: 3, value: 3 },
      { i: 6, value: 3 },
    ]);
  });

  test('3,2,1', () => {
    const input = [
      { i: 6, value: 3 },
      { i: 5, value: 2 },
      { i: 4, value: 1 },
      { i: 3, value: 3 },
      { i: 2, value: 2 },
      { i: 1, value: 1 },
    ];
    const results = sortBy(input, (a) => -a.i);
    assert.deepStrictEqual(results, [
      { i: 6, value: 3 },
      { i: 5, value: 2 },
      { i: 4, value: 1 },
      { i: 3, value: 3 },
      { i: 2, value: 2 },
      { i: 1, value: 1 },
    ]);
  });
});
