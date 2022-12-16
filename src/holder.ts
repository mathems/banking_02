import { MAX_ACCOUNT_BALANCE, MAX_DEPOSIT_PER_TRANSACTION, MAX_WITHDRAWAL_PER_TRANSACTION, MIN_ACCOUNT_BALANCE, MIN_DEPOSIT_PER_TRANSACTION, MIN_WITHDRAWAL_PER_TRANSACTION } from "./types/constants";
import { ErrorMessage } from "./types/error-message.enum";



export class Holder {
  private balance = 0;
  private constructor(
    private fullName: string,
    private id: number
  ) { }


  public static create(fullName: string, id: number) {


    return new Holder(fullName, id)

  }

  public deposit(amount: number) {
    if (amount > MAX_DEPOSIT_PER_TRANSACTION) {
      throw new Error(`The max amount of balance for account is ${MAX_ACCOUNT_BALANCE}!`);
      throw new Error(ErrorMessage.BIG_DEPOSIT);
    }
    if (amount < MIN_DEPOSIT_PER_TRANSACTION) {
      throw new Error(ErrorMessage.SMALL_DEPOSIT);
    }

    const newBalance = this.balance + amount;

    if (newBalance > MAX_ACCOUNT_BALANCE) {
      throw new Error(ErrorMessage.BIG_ACCOUNT_BALANCE);
    }

    this.balance = newBalance;

    return newBalance;
  }

  public withdraw(amount: number) {
    if (amount > MAX_WITHDRAWAL_PER_TRANSACTION) {
      throw new Error(ErrorMessage.BIG_WITHDRAW);
    }

    if (amount < MIN_WITHDRAWAL_PER_TRANSACTION) {
      throw new Error(ErrorMessage.SMALL_WITHDRAW);
    }
    const newBalance = this.balance - amount;

    if (newBalance > MIN_ACCOUNT_BALANCE) {
      throw new Error(ErrorMessage.SMALL_ACCOUNT_BALANCE);
    }

    this.balance = newBalance;

    return newBalance;
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