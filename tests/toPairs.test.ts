import * as assert from 'node:assert';
import { describe, test } from 'node:test';

import { toPairs } from '../src';

describe('toPairs', () => {
  test('check values', () => {
    const input = { one: 1, two: 2, three: 3 };
    const results = toPairs(input);
    assert.deepStrictEqual(results, [
      ['one', 1],
      ['two', 2],
      ['three', 3],
    ]);
  });
});
