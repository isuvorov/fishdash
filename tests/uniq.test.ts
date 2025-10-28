import { test, describe } from 'node:test';
import * as assert from 'node:assert';

import { uniq } from '../src';

describe('uniq', () => {
  test('empty', () => {
    const input = [];
    const results = uniq(input);
  assert.deepStrictEqual(results, []);
  });

  test('1,2,3', () => {
    const input = [1, 2, 3, 1, 2];
    const results = uniq(input);
  assert.deepStrictEqual(results, [1, 2, 3]);
  });
});
