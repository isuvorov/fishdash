import * as assert from 'node:assert';
import { describe, test } from 'node:test';

import { keyBy, keyByFn } from '../src';

describe('keyBy', () => {
  test('default', () => {
    const input = [
      { id: 1, val: 1 },
      { id: 2, val: 2 },
      { id: 3, val: 3 },
    ];
    const results = keyBy(input, 'id');
    assert.deepStrictEqual(results, {
      1: { id: 1, val: 1 },
      2: { id: 2, val: 2 },
      3: { id: 3, val: 3 },
    });
  });

  test('overrides', () => {
    const input = [
      { id: 1, val: 1 },
      { id: 1, val: 2 },
      { id: 1, val: 3 },
    ];
    const results = keyBy(input, 'id');
    assert.deepStrictEqual(results, {
      1: { id: 1, val: 3 },
    });
  });

  test('default fn', () => {
    const input = [
      { id: 1, val: 1 },
      { id: 2, val: 2 },
      { id: 3, val: 3 },
    ];
    const results = keyByFn(input, (a) => a.id);
    assert.deepStrictEqual(results, {
      1: { id: 1, val: 1 },
      2: { id: 2, val: 2 },
      3: { id: 3, val: 3 },
    });
  });

  test('overrides fn', () => {
    const input = [
      { id: 1, val: 1 },
      { id: 1, val: 2 },
      { id: 1, val: 3 },
    ];
    const results = keyByFn(input, (a) => a.id);
    assert.deepStrictEqual(results, {
      1: { id: 1, val: 3 },
    });
  });
});
