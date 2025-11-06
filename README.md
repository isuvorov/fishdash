# 🐟 Fishdash


[![NPM version](https://badgen.net/npm/v/fishdash)](https://www.npmjs.com/package/fishdash)
[![Tests](https://github.com/isuvorov/fishdash/actions/workflows/release.yml/badge.svg)](https://github.com/isuvorov/fishdash/actions/workflows/npm-publish.yml)
[![TypeScript + ESM](https://img.shields.io/badge/TypeScript-Ready-brightgreen.svg)](https://www.typescriptlang.org/)
[![Install size](https://packagephobia.now.sh/badge?p=fishdash)](https://packagephobia.now.sh/result?p=fishdash)
[![Bundle size](https://img.shields.io/bundlephobia/minzip/fishdash.svg)](https://bundlephobia.com/result?p=fishdash)
[![License](https://badgen.net//github/license/isuvorov/fishdash)](https://github.com/isuvorov/fishdash/blob/master/LICENSE)
[![Ask me in Telegram](https://img.shields.io/badge/Ask%20me%20in-Telegram-brightblue.svg)](https://t.me/isuvorov)


<div align="center">
  <p><strong>❤️‍🔥 Modern utility library inspired by Lodash, built with  ESM6 and TypeScript ❤️‍🔥❤️‍🔥❤️‍🔥</strong></p>
</div>

<img src="https://github.com/isuvorov/fishdash/raw/main/docs/logo.png" align="right" width="120" height="120" />

**🚀 Modern**: Built with ESM6 modules and TypeScript  
**🪶 Lightweight**: Tree-shakable functions for optimal bundle size  
**💪 Type-safe**: Full TypeScript support with comprehensive type definitions  
**⚡ Fast**: Optimized algorithms for maximum performance  
**🎯 Focused**: Essential utility functions without bloat  
**📦 Zero Dependencies**: No external dependencies

```ts
import { uniqBy } from 'fishdash';

const res = uniqBy([{val: 1}, {val: 2}, {val: 1}], item => item.val);
```


## Features

## Installation

### Package Manager

Using npm:
```bash
npm install fishdash
```

Using yarn:
```bash
yarn add fishdash
```

Using pnpm:
```bash
pnpm add fishdash
```

Using bun:
```bash
bun add fishdash
```

### Import

Import specific functions (recommended for tree-shaking):
```typescript
import { map, groupBy, pick } from 'fishdash';
```

Import all functions:
```typescript
import fishdash from 'fishdash';
// or
import * as fishdash from 'fishdash';
```

## Quick Start

```typescript
import { map, groupBy, pick, deepMerge } from 'fishdash';

// Working with arrays
const users = [
  { id: 1, name: 'Alice', age: 25, department: 'Engineering' },
  { id: 2, name: 'Bob', age: 30, department: 'Engineering' },
  { id: 3, name: 'Carol', age: 28, department: 'Marketing' }
];

// Extract names
const names = map(users, user => user.name);
// ['Alice', 'Bob', 'Carol']

// Group by department
const byDepartment = groupBy(users, user => user.department);
// {
//   Engineering: [{ id: 1, name: 'Alice', ... }, { id: 2, name: 'Bob', ... }],
//   Marketing: [{ id: 3, name: 'Carol', ... }]
// }

// Pick specific properties
const summary = pick(users[0], ['id', 'name']);
// { id: 1, name: 'Alice' }

// Deep merge objects
const config = deepMerge(
  { api: { timeout: 5000 } },
  { api: { retries: 3 }, debug: true }
);
// { api: { timeout: 5000, retries: 3 }, debug: true }
```

## API Reference

### Array Functions

#### `map(object, mapper)`
Transforms each value in an object using the mapper function and returns an array.

```typescript
const users = { user1: { name: 'Alice' }, user2: { name: 'Bob' } };
const names = map(users, user => user.name);
// ['Alice', 'Bob']
```

#### `groupBy(array, iteratee)`
Groups array elements by the result of running each element through iteratee.

```typescript
const inventory = [
  { name: 'apple', category: 'fruit' },
  { name: 'carrot', category: 'vegetable' },
  { name: 'banana', category: 'fruit' }
];

const grouped = groupBy(inventory, item => item.category);
// {
//   fruit: [{ name: 'apple', category: 'fruit' }, { name: 'banana', category: 'fruit' }],
//   vegetable: [{ name: 'carrot', category: 'vegetable' }]
// }
```

#### `sortBy(array, iteratee)`
Sorts array elements by the result of running each element through iteratee.

```typescript
const users = [
  { name: 'Charlie', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 }
];

const sortedByAge = sortBy(users, user => user.age);
// [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 30 }, { name: 'Bob', age: 35 }]
```

#### `uniq(array)` & `uniqBy(array, iteratee)`
Removes duplicate values from an array.

```typescript
// Simple deduplication
const numbers = uniq([1, 2, 2, 3, 1, 4]);
// [1, 2, 3, 4]

// Deduplication by property
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Alice' }
];
const uniqueUsers = uniqBy(users, user => user.id);
// [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]
```

#### `count(array, predicate)` & `countBy(array, iteratee)`
Counts elements in an array.

```typescript
// Count with predicate
const numbers = [1, 2, 3, 4, 5];
const evenCount = count(numbers, n => n % 2 === 0);
// 2

// Count by grouping
const fruits = ['apple', 'banana', 'apple', 'orange'];
const counts = countBy(fruits, fruit => fruit);
// { apple: 2, banana: 1, orange: 1 }
```

### Object Functions

#### `pick(object, keys)` & `pickBy(object, predicate)`
Selects specific properties from an object.

```typescript
const user = { id: 1, name: 'Alice', email: 'alice@example.com', password: 'secret' };

// Pick specific keys
const publicInfo = pick(user, ['id', 'name', 'email']);
// { id: 1, name: 'Alice', email: 'alice@example.com' }

// Pick by predicate
const nonSensitive = pickBy(user, (value, key) => key !== 'password');
// { id: 1, name: 'Alice', email: 'alice@example.com' }
```

#### `omit(object, keys)` & `omitBy(object, predicate)`
Excludes specific properties from an object.

```typescript
const user = { id: 1, name: 'Alice', email: 'alice@example.com', password: 'secret' };

// Omit specific keys
const publicInfo = omit(user, ['password']);
// { id: 1, name: 'Alice', email: 'alice@example.com' }

// Omit by predicate
const withoutEmpty = omitBy({ a: 1, b: '', c: 3, d: null }, value => !value);
// { a: 1, c: 3 }
```

#### `mapValues(object, iteratee)`
Transforms values in an object while preserving keys.

```typescript
const scores = { math: 85, science: 92, english: 78 };
const grades = mapValues(scores, score => score >= 90 ? 'A' : score >= 80 ? 'B' : 'C');
// { math: 'B', science: 'A', english: 'C' }
```

#### `keyBy(array, iteratee)`
Creates an object keyed by the result of running each array element through iteratee.

```typescript
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];
const usersById = keyBy(users, user => user.id);
// { 1: { id: 1, name: 'Alice' }, 2: { id: 2, name: 'Bob' } }
```

#### `deepMerge(...objects)`
Recursively merges objects, concatenating arrays.

```typescript
const obj1 = {
  api: { timeout: 5000 },
  features: ['auth']
};

const obj2 = {
  api: { retries: 3 },
  features: ['logging'],
  debug: true
};

const merged = deepMerge(obj1, obj2);
// {
//   api: { timeout: 5000, retries: 3 },
//   features: ['auth', 'logging'],
//   debug: true
// }
```

### Utility Functions

#### `fromPairs(pairs)` & `toPairs(object)`
Converts between arrays of key-value pairs and objects.

```typescript
// From pairs to object
const pairs = [['a', 1], ['b', 2], ['c', 3]];
const obj = fromPairs(pairs);
// { a: 1, b: 2, c: 3 }

// From object to pairs
const object = { x: 1, y: 2 };
const converted = toPairs(object);
// [['x', 1], ['y', 2]]
```

#### `set(object, path, value)` & `setProps(object, props)`
Sets values in objects.

```typescript
// Set nested property
const user = {};
set(user, 'profile.name', 'Alice');
// { profile: { name: 'Alice' } }

// Set multiple properties
const updated = setProps(user, { age: 25, 'profile.email': 'alice@example.com' });
// { profile: { name: 'Alice', email: 'alice@example.com' }, age: 25 }
```

#### `pad(string, length, chars)`
Pads a string to a specified length.

```typescript
const padded = pad('hello', 10, '-');
// '--hello---'
```

### Conditional Functions

#### `any(array, predicate)` & `every(array, predicate)`
Tests array elements against a predicate.

```typescript
const numbers = [1, 2, 3, 4, 5];

const hasEven = any(numbers, n => n % 2 === 0);
// true

const allPositive = every(numbers, n => n > 0);
// true
```

#### `maxBy(array, iteratee)` & `minBy(array, iteratee)`
Finds maximum/minimum values by a given criteria.

```typescript
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Carol', age: 22 }
];

const oldest = maxBy(users, user => user.age);
// { name: 'Bob', age: 30 }

const youngest = minBy(users, user => user.age);
// { name: 'Carol', age: 22 }
```

## Type Definitions

Fishdash includes comprehensive TypeScript definitions:

```typescript
// Generic mapper function type
type ObjectMapper<T> = (value: T, key?: string | number) => any;

// Object-like type for flexible input
type ObjectLike<T> = Record<string | number, T>;

// All functions are properly typed for intellisense and type safety
const users: User[] = [/* ... */];
const names: string[] = map(users, user => user.name); // Type-safe!
```

## Tree Shaking

Fishdash is built with tree-shaking in mind. Import only what you need:

```typescript
// ✅ Good - only imports the functions you use
import { map, filter } from 'fishdash';

// ❌ Avoid - imports the entire library
import fishdash from 'fishdash';
const result = fishdash.map(/* ... */);
```

## Browser Support

Fishdash supports all modern browsers that support ES6+ features:

- Chrome 61+
- Firefox 60+
- Safari 11+
- Edge 79+

## Performance

Fishdash is optimized for performance while maintaining readability:

- Minimal runtime overhead
- Efficient algorithms
- No unnecessary object creation
- Optimized for V8 engine

## Inspired by

- [Lodash](https://lodash.com/) - A modern JavaScript utility library delivering modularity, performance & extras
- [Ramda](https://ramdajs.com/) - A practical functional library for JavaScript programmers
- [Underscore.js](https://underscorejs.org/) - JavaScript's utility belt

## How to write TypeScript Libraries in 2025-2026

- [Building a TypeScript Library in 2025](https://dev.to/arshadyaseen/building-a-typescript-library-in-2025-2h0i)
- 

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes and add tests
4. Ensure all tests pass (`npm test`)
5. Commit your changes (`git commit -m 'Add some amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

Please read our [Contributing Guide](CONTRIBUTING.md) for detailed information.

## Resources

- [Documentation](https://isuvorov.github.io/fishdash/)
- [GitHub Repository](https://github.com/isuvorov/fishdash)
- [NPM Package](https://www.npmjs.com/package/fishdash)
- [Issues & Bug Reports](https://github.com/isuvorov/fishdash/issues)

## License

MIT © [Igor Suvorov](https://github.com/isuvorov)

---

**fishdash** - _Swimming in utilities_ 🐠
