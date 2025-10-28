import * as assert from 'node:assert';
import { describe, test } from 'node:test';

import { omitBy } from '../src';

describe('omitBy', () => {
  test('should work with a predicate argument', () => {
    const input = { one: 1, two: 2, three: 3, four: 4 };
    const results = omitBy(input, (n) => n === 2 || n === 4);
    assert.deepStrictEqual(results, { one: 1, three: 3 });
  });
});
