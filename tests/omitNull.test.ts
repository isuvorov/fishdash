import * as assert from 'node:assert';
import { describe, test } from 'node:test';

import { omitNull } from '../src/index.js';

describe('omitNull', () => {
  test('should work with a predicate argument', () => {
    const input = { one: 1, two: null, three: 3, four: undefined };
    const results = omitNull(input);
    assert.deepStrictEqual(results, { one: 1, three: 3 });
  });
});
