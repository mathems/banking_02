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
import { Bank } from "../bank";

describe('Deposit', () => {
  beforeAll(() => {
    Bank.create('Biba');
    Bank.create('Boba');
  });

  it('where is any test???', () => { });
});