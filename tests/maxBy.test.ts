import * as assert from 'node:assert';
import { describe, test } from 'node:test';

import { maxBy } from '../src';

describe('maxBy', () => {
  test('empty', () => {
    const input = [];
    const results = maxBy(input, (a) => a.value);
    assert.deepStrictEqual(results, undefined);
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
    const results = maxBy(input, (a) => a.value);
    assert.deepStrictEqual(results, { i: 3, value: 3 });
  });
});
