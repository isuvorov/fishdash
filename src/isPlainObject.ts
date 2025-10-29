/*
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
// biome-ignore-start lint/suspicious/noPrototypeBuiltins: copied from original source

function isObject(o: any) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

export const isPlainObject = (o: any): boolean => {
  if (isObject(o) === false) return false;

  // If has modified constructor
  const ctor = o.constructor;
  if (ctor === undefined) return true;

  // If has modified prototype
  const prot = ctor.prototype;
  // if (isObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};

// biome-ignore-end lint/suspicious/noPrototypeBuiltins: copied from original source

export default isPlainObject;
