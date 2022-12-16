export enum ErrorMessage {
  BIG_ACCOUNT_BALANCE = 'Account balance cannot exceed $100,000',
  SMALL_ACCOUNT_BALANCE = 'Account balance cannot be less than $0',
  SMALL_DEPOSIT = 'Minimum deposit amount is 500',
  BIG_DEPOSIT = 'Maximum deposit amount is 50000',
  SMALL_WITHDRAW = 'Minimum withdrawal amount is 1000',
  BIG_WITHDRAW = 'The maximum withdrawal amount is $25,000 per transaction',
  MANY_DEPOSITS_FOR_DAY = 'Only 3 deposits are allowed in a day',
  MANY_WITHDRAWS_FOR_DAY = 'No more than 3 withdrawals are allowed in a day',
  HOLDER_NOT_FOUNT = 'Account number entered during deposit or withdrawal should be valid',
  INSUFFICIENT_BALANCE = 'Insufficient balance',
}