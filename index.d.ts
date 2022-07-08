declare module "lodash" {
  function head<T>(array: T[]): T | undefined;
  function hasIn(object: Object, key: string): boolean;
  function isBoolean<T>(value: T): boolean;
  function toString<T>(value: T): string;
  function split<T>(
    string: string | undefined,
    separator: RegExp | string,
    limit?: number | undefined
  ): T[];
  function hasPath<T>(object: Object, path: T[] | string): boolean;
  function filter<T>(array: T[], predicate: Function): T[];
  function every<T>(array: T[], predicate: Function): boolean;
  function map<T, U>(array: T[], iteratee: Function): U[];
}
