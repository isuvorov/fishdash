import * as assert from 'node:assert';
import { describe, test } from 'node:test';

import { groupBy } from '../src';

describe('groupBy', () => {
  test('default', () => {
    const input = [
      { id: 2, val: 2 },
      { id: 1, val: 1 },
      { id: 3, val: 2 },
    ];
    const results = groupBy(input, (a) => a.id);
    assert.deepStrictEqual(results, {
      1: [{ id: 1, val: 1 }],
      2: [{ id: 2, val: 2 }],
      3: [{ id: 3, val: 2 }],
    });
  });

  test('dublicates', () => {
    const input = [
      { id: 1, val: 1 },
      { id: 2, val: 2 },
      { id: 3, val: 2 },
    ];
    const results = groupBy(input, (a) => a.val);
    assert.deepStrictEqual(results, {
      1: [{ id: 1, val: 1 }],
      2: [
        { id: 2, val: 2 },
        { id: 3, val: 2 },
      ],
    });
  });
});
