import * as assert from 'node:assert';
import { describe, test } from 'node:test';

import { pick } from '../src/index.js';

describe('pick', () => {
  test('should work with a predicate argument', () => {
    const input = { one: 1, two: 2, three: 3, four: 4 };
    const results = pick(input, ['two', 'four']);
    assert.deepStrictEqual(results, { two: 2, four: 4 });
  });
});
