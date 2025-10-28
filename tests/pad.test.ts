import * as assert from 'node:assert';
import { describe, test } from 'node:test';

import { pad } from '../src';

describe('pad', () => {
  test('empty width', () => {
    const input = 'Hello';
    const results = pad(input);
    assert.deepStrictEqual(results, 'Hello');
  });

  test('width=1', () => {
    const input = 'Hello';
    const results = pad(input, 1);
    assert.deepStrictEqual(results, 'Hello');
  });

  test('width=5', () => {
    const input = 'Hello';
    const results = pad(input, 5);
    assert.deepStrictEqual(results, 'Hello');
  });

  test('width=6', () => {
    const input = 'Hello';
    const results = pad(input, 6);
    assert.deepStrictEqual(results, 'Hello ');
  });

  test('width=7', () => {
    const input = 'Hello';
    const results = pad(input, 7);
    assert.deepStrictEqual(results, ' Hello ');
  });

  test('width=7 fillString=#', () => {
    const input = 'Hello';
    const results = pad(input, 7, '#');
    assert.deepStrictEqual(results, '#Hello#');
  });
});
