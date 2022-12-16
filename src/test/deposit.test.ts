// Output: 1500
// ● Input: Deposit 1001 100
// Output: Minimum deposit amount is 500
// ● Input: Deposit 1001 60000
// Output: Maximum deposit amount is 50000
// ● Input: Deposit 1001 10000
// Output: 11500
// ● Input: Deposit 1001 10000
// Output: Only 3 deposits are allowed in a day
//
import { getHolderById } from "../all-holders";
import { Bank } from "../bank";
describe('Deposit', () => {
  beforeAll(() => {
    Bank.create('Biba');
    Bank.create('Boba');
  });
  it.each([
    { id: 1001, amount: 500, output: 500 },
    { id: 1001, amount: 1_000, output: 1_500 },
    { id: 1001, amount: 100, output: 'Minimum deposit amount is 500' },
    { id: 1001, amount: 50_000, output: 'Maximum deposit amount is 50000' },
    { id: 1001, amount: 10_000, output: 11_500 },
    { id: 1001, amount: 10_000, output: 'Only 3 deposits are allowed in a day' },

  ])('After making deposit ($amount\$) to holder (No."$id") output should be - $output', ({ id, amount, output }) => {
    expect(Bank.deposit(id, amount)).toBe(output);
  });
});