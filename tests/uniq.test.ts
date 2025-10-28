import * as assert from 'node:assert';
import { describe, test } from 'node:test';

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
