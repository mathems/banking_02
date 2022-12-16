import { MAX_DEPOSIT_PER_TRANSACTION, MIN_DEPOSIT_PER_TRANSACTION, MAX_ACCOUNT_BALANCE, MAX_DEPOSIT_COUNT_IN_A_DAY, MAX_WITHDRAWAL_PER_TRANSACTION, MIN_WITHDRAWAL_PER_TRANSACTION, MIN_ACCOUNT_BALANCE, MAX_WITHDRAWAL_COUNT_IN_A_DAY } from "./types/constants";
import { ErrorMessage } from "./types/error-message.enum";
type UNDER_MY_RESPONSIBILITY = 'I should to call check* method before this operation';
export class Holder {
  private todayDepositsCount = 0;
  private todayWithdrawsCount = 0;
  private balance = 0;
  public resetCounters() {
    this.todayDepositsCount = 0;
    this.todayWithdrawsCount = 0;
  }
  private constructor(
    private fullName: string,
    private id: number,
  ) { }
  public static create(fullName: string, id: number) {
    return new Holder(fullName, id);
  }
  public checkIsDepositPossible(amount: number) {
    if (amount >= MAX_DEPOSIT_PER_TRANSACTION) {
      return ErrorMessage.BIG_DEPOSIT;
    }
    if (amount < MIN_DEPOSIT_PER_TRANSACTION) {
      return ErrorMessage.SMALL_DEPOSIT;
    }
    const newBalance = this.balance + amount;
    if (newBalance > MAX_ACCOUNT_BALANCE) {
      return ErrorMessage.BIG_ACCOUNT_BALANCE;
    }
    const newCountOfDepositsToday = this.todayDepositsCount + 1;
    if (newCountOfDepositsToday > MAX_DEPOSIT_COUNT_IN_A_DAY) {
      return ErrorMessage.MANY_DEPOSITS_FOR_DAY;
    }
    return null;
  }
  public deposit(amount: number, _underMyResponsibility: UNDER_MY_RESPONSIBILITY) {
    ++this.todayDepositsCount;
    return this.balance += amount;
  }
  public checkIsWithdrawPossible(amount: number) {
    if (amount > MAX_WITHDRAWAL_PER_TRANSACTION) {
      return ErrorMessage.BIG_WITHDRAW;
    }
    if (amount < MIN_WITHDRAWAL_PER_TRANSACTION) {
      return ErrorMessage.SMALL_WITHDRAW;
    }

    const newBalance = this.balance - amount;

    if (newBalance < MIN_ACCOUNT_BALANCE) {
      return ErrorMessage.INSUFFICIENT_BALANCE;
    }

    const newCountOfWithdrawsToday = this.todayWithdrawsCount + 1;
    if (newCountOfWithdrawsToday > MAX_WITHDRAWAL_COUNT_IN_A_DAY) {
      return ErrorMessage.MANY_WITHDRAWS_FOR_DAY;
    }
    return null;
  }
  public withdraw(amount: number, _underMyResponsibility: UNDER_MY_RESPONSIBILITY) {
    ++this.todayWithdrawsCount;
    return this.balance -= amount;
  }
  public getBalance() {
    return this.balance;
  }
  public getFullName() {
    return this.fullName;
  }
  public getId() {
    return this.id;
  }
}