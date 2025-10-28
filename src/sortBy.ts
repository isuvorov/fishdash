import { ObjectMapper } from './types';

export const sortBy = <T>(arr: Array<T>, filter: ObjectMapper<T>) =>
  arr.sort((a, b) => filter(a) - filter(b));

export default sortBy;
