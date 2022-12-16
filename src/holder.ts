import { MAX_ACCOUNT_BALANCE, MAX_DEPOSIT_PER_TRANSACTION, MAX_WITHDRAWAL_PER_TRANSACTION, MIN_ACCOUNT_BALANCE, MIN_DEPOSIT_PER_TRANSACTION, MIN_WITHDRAWAL_PER_TRANSACTION } from "./types/constants";
import { ErrorMessage } from "./types/error-message.enum";

type UNDER_MY_RESPONSIBILITY = 'I should to call check* method before this operation';

export class Holder {
  private todayOperationsCount = 0;
  private balance = 0;
  private constructor(
    private fullName: string,
    private id: number
  ) { }


  public static create(fullName: string, id: number) {


    return new Holder(fullName, id)

  }

  public checkIsDepositPossible(amount: number) {
    if (amount > MAX_DEPOSIT_PER_TRANSACTION) {
      return ErrorMessage.BIG_DEPOSIT;
    }

    if (amount < MIN_DEPOSIT_PER_TRANSACTION) {
      return ErrorMessage.SMALL_DEPOSIT;
    }

    const newBalance = this.balance + amount;

    if (newBalance > MAX_ACCOUNT_BALANCE) {
      return ErrorMessage.BIG_ACCOUNT_BALANCE;
    }

    return newBalance;
  }

  public deposit(amount: number, message: UNDER_MY_RESPONSIBILITY) {
    return this.balance += amount;
  }


  public checkIsWithdrawPossible(amount: number): ErrorMessage | number {
    if (amount > MAX_WITHDRAWAL_PER_TRANSACTION) {
      return ErrorMessage.BIG_WITHDRAW;
    }

    if (amount < MIN_WITHDRAWAL_PER_TRANSACTION) {
      return ErrorMessage.SMALL_WITHDRAW;
    }

    const newBalance = this.balance - amount;

    if (newBalance > MIN_ACCOUNT_BALANCE) {
      return ErrorMessage.SMALL_ACCOUNT_BALANCE;
    }

    return newBalance;
  }

  public withdraw(amount: number, message: UNDER_MY_RESPONSIBILITY) {
    return this.balance -= amount;
  }



  public getBalance() {
    return this.balance;
  }

  public getFullName() {
    return this.fullName;
  }

  public getId() {
    return this.id
  }

}