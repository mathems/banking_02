import { MAX_ACCOUNT_BALANCE } from "./types/constants";
import { generateId } from "./utils/generate-id.util";



const ALL_HOLDERS = new Map<number, Holder>();
export class Holder {
  private balance = 0;
  private constructor(
    private fullName: string,
    private id: number
  ) { }


  public static create(fullName: string) {
    const id = generateId();
    const holder = new Holder(fullName, id)

    ALL_HOLDERS.set(id, holder);

    return holder

  }

  public deposit(amount: number) {
    if (MAX_ACCOUNT_BALANCE > (amount + this.balance)) {
      throw new Error(`The max amount of balance of account is ${MAX_ACCOUNT_BALANCE}!`)
    }

    return this.balance += amount
  }

  public getFullName() {
    return this.fullName;
  }

  public getId() {
    return this.id
  }

}