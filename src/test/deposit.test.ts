/*
Deposit
● Input: Deposit 1001 500
Output: 500
● Input: Deposit 1001 1000
Output: 1500
● Input: Deposit 1001 100
Output: Minimum deposit amount is 500
● Input: Deposit 1001 60000
Output: Maximum deposit amount is 50000
● Input: Deposit 1001 10000
Output: 11500
● Input: Deposit 1001 10000
Output: Only 3 deposits are allowed in a day
*/
import { getHolderById } from "../all-holders";
import { Bank } from "../bank";

describe('Deposit', () => {
  beforeAll(() => {
    Bank.create('Biba');
    Bank.create('Boba');
  });

  it.each([
    { id: 1001, amount: 500, output: 500 },
  ])('After making deposit ($amount\$) to holder (No."$id") current balance should be $output\$.', ({ id, amount, output }) => {
    expect(Bank.deposit(id, amount)).toBe(output);
  });
});