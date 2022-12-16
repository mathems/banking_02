
// Withdrawal
// ● Input: Withdraw 1001 500
// Output: Minimum withdrawal amount is 1000
// ● Input: Withdraw 1001 20000
// Output: Insufficient balance
// ● Input: Withdraw 1001 1000
// Output: 10500
// ● Input: Withdraw 1001 1900
// Output: 8600
// ● Input: Withdraw 1001 1000
// Output: 7600
// ● Input: Withdraw 1001 5000
// Output: Only 3 withdrawals are allowed in a day


import { Bank } from "../bank";
describe('Withdrawal', () => {
  beforeAll(() => {
    Bank.create('Biba');
    Bank.create('Boba');
    Bank.deposit(1001, 500);
    Bank.deposit(1001, 1500);
    Bank.deposit(1001, 11_500);
  });
  it.each([
    { id: 1001, amount: 500, output: 'Minimum withdrawal amount is 1000' },
    { id: 1001, amount: 20_000, output: 'Insufficient balance' },
    // { id: 1001, amount: 100, output: 'Minimum deposit amount is 500' },
    // { id: 1001, amount: 50_000, output: 'Maximum deposit amount is 50000' },
    // { id: 1001, amount: 10_000, output: 11_500 },
    // { id: 1001, amount: 10_000, output: 'Only 3 deposits are allowed in a day' },

  ])('After making withdraw (-$amount\$) from holder (No."$id") output should be - $output', ({ id, amount, output }) => {
    expect(Bank.withdraw(id, amount)).toBe(output);
  });
});