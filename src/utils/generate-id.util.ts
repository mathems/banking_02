let LAST_ID = 0;

export function generateId() {
  return ++LAST_ID;
}