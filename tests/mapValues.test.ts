import { test, describe } from 'node:test';
import * as assert from 'node:assert';

import { mapValues } from '../src';

describe('mapValues', () => {
  test('without mapper', () => {
    const input = { one: 1, two: 2, three: 3 };
    const results = mapValues(input);
  assert.deepStrictEqual(results, { one: 1, two: 2, three: 3 });
  });

  test('simple mapper', () => {
    const input = { one: 1, two: 2, three: 3 };
    const mapper = (a) => a * 2;
    const results = mapValues(input, mapper);
  assert.deepStrictEqual(results, { one: 2, two: 4, three: 6 });
  });
});
