import * as assert from 'node:assert';
import { describe, test } from 'node:test';

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
      this.abc = {};
    }
    assert.ok(!isPlainObject(/foo/));
    assert.ok(!isPlainObject(() => {}));
    assert.ok(!isPlainObject(() => {}));
    assert.ok(!isPlainObject(1));
    assert.ok(!isPlainObject(['foo', 'bar']));
    assert.ok(!isPlainObject([]));
    assert.ok(!isPlainObject(new Foo()));
    assert.ok(!isPlainObject(null));
  });
});
