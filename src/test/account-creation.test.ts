
// Account creation
// ● Input: Create “Steve Rogers”
// Output: 1001
// ● Input: Create “Diana Prince”
// Output: 1002

import { Bank } from "../bank";

describe('Account creation', () => {
  it.each([
    { name: 'Steve Rogers', id: 1001 },
    { name: 'Diana Price', id: 1002 },
  ])('Should create holder "$name" with "id" $id', ({ name, id }) => {
    expect(Bank.create(name)).toBe(id);
  });
});