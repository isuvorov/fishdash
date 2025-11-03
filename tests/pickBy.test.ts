import * as assert from 'node:assert';
import { describe, test } from 'node:test';

import { pickBy } from '../src/index.js';

describe('pickBy', () => {
  test('should work with a predicate argument', () => {
    const input = { one: 1, two: 2, three: 3, four: 4 };
    const results = pickBy(input, (n) => n === 2 || n === 4);
    assert.deepStrictEqual(results, { two: 2, four: 4 });
  });
});
