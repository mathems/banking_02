export function expectToBe(actual: any, expected: any) {
  const result = actual === expected;

  if (result) {
    console.info('good:', actual, '=', expected);
  } else {
    console.warn('oops:', actual, '!=', expected);
  }

  return result;
}