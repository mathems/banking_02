

// Transfer
// ● Input: Transfer 1001 1002 5000
// Output: Successful
// ● Input: Transfer 1002 1004 500
// Output: Minimum withdrawal amount is 1000 for account 1002
// ● Input: Transfer 1002 1004 30000
// Output: Maximum withdrawal amount is 30000 for account 1002

import { Bank } from "../bank";
describe('Transfer', () => {
  beforeAll(() => {
    Bank.create('Biba');
    Bank.create('no-name');
    Bank.create('no-name');
    Bank.create('Boba');
    Bank.deposit(1001, 500);
    Bank.deposit(1001, 1_000);
    Bank.deposit(1001, 10_000);
    Bank.withdraw(1001, 1_000);
    Bank.withdraw(1001, 1_900);
    Bank.withdraw(1001, 1_00);
  });
  it.each([
    { from: 1001, to: 1002, amount: 5_000, output: 'Successful' },
    { from: 1002, to: 1004, amount: 500, output: 'Minimum withdrawal amount is 1000 for account 1002' },
  ])(`Transfer operation:
    from holder (No.$from) to holder (No.$to)'
    amount $amount\$
    Should receive output: "$output"`,
    ({ from, to, amount, output }) => {
      expect(Bank.transfer(from, to, amount)).toBe(output);
    });
});