import * as assert from 'node:assert';
import { describe, test } from 'node:test';

import { any } from '../src';

describe('any', () => {
  test('check value', () => {
    const input = { one: 1, two: 2, three: 3 };
    const results = any(input, (a) => a === 3);
    assert.deepStrictEqual(results, true);
  });

  test('check false value', () => {
    const input = { one: 1, two: 2, three: 3 };
    const results = any(input, (a) => a === 44);
    assert.deepStrictEqual(results, false);
  });
});
