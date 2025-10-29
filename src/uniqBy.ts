import type { ObjectMapper } from './types';

export const uniqBy = <T>(arr: Array<T>, mapper: ObjectMapper<T>): Array<T> => {
  const seen = new Set<any>();
  const result: Array<T> = [];
  for (const item of arr) {
    const mapped = mapper(item);
    if (!seen.has(mapped)) {
      seen.add(mapped);
      result.push(item);
    }
  }
  return result;
}
// [...new Set(arr.map(mapper))].map((x) => arr.find((y) => mapper(y) === x));

export default uniqBy;
