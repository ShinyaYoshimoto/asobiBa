export class ArrayUtil {
  static groupBy = <T extends {[key: string]: any}>(objects: T[], key: keyof T): Array<{key: string; values: T[]}> => {
    const map = objects.reduce(
      (map, obj) => {
        map[obj[key]] = map[obj[key]] || [];
        map[obj[key]].push(obj);
        return map;
      },
      {} as {[key: string]: T[]}
    );

    return Object.keys(map).map(k => ({key: k, values: map[k]}));
  };
}
