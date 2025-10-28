import { test, describe } from 'node:test';
import * as assert from 'node:assert';

import { isPlainObject } from '../src';

describe('isPlainObject', () => {
  test('should return `true` if the object is created by the `Object` constructor.', () => {
    assert.ok(isPlainObject(Object.create({})));
    assert.ok(isPlainObject(Object.create(Object.prototype)));
    assert.ok(isPlainObject({ foo: 'bar' }));
    assert.ok(isPlainObject({}));
    assert.ok(isPlainObject(Object.create(null)));
  });

  test('should return `false` if the object is not created by the `Object` constructor.', () => {
    function Foo() {
      // @ts-ignore
      this.abc = {};
    }
  assert.ok(!isPlainObject(/foo/));
  assert.ok(!isPlainObject(() => {}));
  // eslint-disable-next-line prefer-arrow-callback
  assert.ok(!isPlainObject(function () {}));
  assert.ok(!isPlainObject(1));
  assert.ok(!isPlainObject(['foo', 'bar']));
  assert.ok(!isPlainObject([]));
  // @ts-ignore
  assert.ok(!isPlainObject(new Foo()));
  assert.ok(!isPlainObject(null));
  });
});
