import * as assert from 'node:assert';
import { describe, test } from 'node:test';

import { map } from '../src';

describe('map', () => {
  test('without mapper', () => {
    const input = { one: 1, two: 2, three: 3 };
    const results = map(input);
    assert.deepStrictEqual(results, [1, 2, 3]);
  });

  test('simple mapper', () => {
    const input = { one: 1, two: 2, three: 3 };
    const mapper = (a) => a * 2;
    const results = map(input, mapper);
    assert.deepStrictEqual(results, [2, 4, 6]);
  });
});
