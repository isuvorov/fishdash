import { test, describe } from 'node:test';
import * as assert from 'node:assert';

import { omitNull } from '../src';

describe('omitNull', () => {
  test('should work with a predicate argument', () => {
    const input = { one: 1, two: null, three: 3, four: undefined };
    const results = omitNull(input);
  assert.deepStrictEqual(results, { one: 1, three: 3 });
  });
});
