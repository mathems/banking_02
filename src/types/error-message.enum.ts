
export enum ErrorMessage {
  BIG_ACCOUNT_BALANCE = 'Account balance cannot exceed $100,000',
  SMALL_ACCOUNT_BALANCE = 'Account balance cannot be less than $0',
  SMALL_DEPOSIT = 'The minimum deposit amount is $500 per transaction',
  BIG_DEPOSIT = 'The maximum deposit amount is $50,000 per transaction',
  SMALL_WITHDRAW = 'The minimum withdrawal amount is $1,000 per transaction',
  BIG_WITHDRAW = 'The maximum withdrawal amount is $25,000 per transaction',
  MANY_DEPOSITS_FOR_DAY = 'No more than 3 deposits are allowed in a day',
  MANY_WITHDRAWS_FOR_DAY = 'No more than 3 withdrawals are allowed in a day',
  HOLDER_NOT_FOUNT = 'Account number entered during deposit or withdrawal should be valid',
  NOT_SUFFICIENT_BALANCE = 'Account has not sufficient balance during withdrawals',
}