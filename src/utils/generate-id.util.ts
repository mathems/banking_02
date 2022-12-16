let LAST_ID = 1000;

export function generateId() {
  return ++LAST_ID;
}