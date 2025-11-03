import * as assert from 'node:assert';
import { describe, test } from 'node:test';

import { uniqBy } from '../src/index.js';

describe('uniqBy', () => {
  test('empty', () => {
    const input = [];
    const results = uniqBy(input, (a) => a.value);
    assert.deepStrictEqual(results, []);
  });

  test('1,2,3', () => {
    const input = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 1 }, { value: 2 }];
    const results = uniqBy(input, (a) => a.value);
    assert.deepStrictEqual(results, [{ value: 1 }, { value: 2 }, { value: 3 }]);
  });
});
