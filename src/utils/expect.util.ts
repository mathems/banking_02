export function expectToBe(actual: any, expected: any) {
  return actual === expected;
  const result = actual === expected;

  if (result) {
    console.info('good:', actual, '=', expected);
  } else {
    console.warn('oops:', actual, '!=', expected);
  }

  return result;
}
