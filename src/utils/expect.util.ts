export function expect(actual: any) {

  return {
    toBe(expected: any) {
      const result = actual === expected;

      if (result) {
        console.info('good:', actual, '=', expected);
      } else {
        console.warn('oops:', actual, '!=', expected);
      }

      return result;
    }
  }
}