import * as assert from 'node:assert';
import { describe, test } from 'node:test';

import { omit } from '../src';

describe('omit', () => {
  test('should work with a predicate argument', () => {
    const input = { one: 1, two: 2, three: 3, four: 4 };
    const results = omit(input, ['two', 'four']);
    assert.deepStrictEqual(results, { one: 1, three: 3 });
  });
});
