export default function curry(fn: (...args: any[]) => any): any {
  let allArgs: any[] = [];
  const f = (...args: any[]) => {
    allArgs = [...allArgs, ...args]
    if (allArgs.length === fn.length) {
      return fn(...allArgs);
    } else {
      return f;
    }
  }
  return f;
}