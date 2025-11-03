import * as assert from 'node:assert';
import { describe, test } from 'node:test';

import { deepMerge } from '../src/index.js';

describe('deepMerge', () => {
  test('without mapper', () => {
    const input1 = {
      foo: { bar: 3 },
      array: [
        {
          does: 'work',
          too: [1, 2, 3],
        },
      ],
    };
    const input2 = {
      foo: { baz: 4 },
      quux: 5,
      array: [
        {
          does: 'work',
          too: [4, 5, 6],
        },
        {
          really: 'yes',
        },
      ],
    };
    const output = {
      foo: {
        bar: 3,
        baz: 4,
      },
      array: [
        {
          does: 'work',
          too: [1, 2, 3],
        },
        {
          does: 'work',
          too: [4, 5, 6],
        },
        {
          really: 'yes',
        },
      ],
      quux: 5,
    };

    const results = deepMerge(input1, input2);
    assert.deepStrictEqual(results, output);
  });
});
