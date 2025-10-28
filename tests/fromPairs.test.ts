import * as assert from 'node:assert';
import { describe, test } from 'node:test';

import { fromPairs } from '../src';

describe('fromPairs', () => {
  test('check values', () => {
    const input = [
      ['one', 1],
      ['two', 2],
      ['three', 3],
    ];
    const results = fromPairs(input);
    assert.deepStrictEqual(results, { one: 1, two: 2, three: 3 });
  });
});
