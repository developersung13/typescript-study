declare module "lodash" {
  function head(array: any): any;
  function hasIn(object: Object, key: string): boolean;
  function isBoolean(value: any): boolean;
  function toString(value: any): string;
  function split(
    string: string | undefined,
    separator: RegExp | string,
    limit?: number | undefined
  ): any[];
  function hasPath(object: Object, path: any[] | string): boolean;
  function filter(array: any[], predicate: Function): any[];
  function every(array: any[], predicate: Function): boolean;
  function map(array: any[], iteratee: Function): any[];
}
