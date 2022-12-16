import { ALL_HOLDERS, getHolderById } from "./all-holders";
import { Holder } from "./holder";
import { ErrorMessage } from "./types/error-message.enum";
import { InputCommand } from "./types/input_command.enum";
import { generateId } from "./utils/generate-id.util";


export class Bank {
  public static [InputCommand.CREATE](fullName: string) {
    const id = generateId();
    const holder = Holder.create(fullName, id);

    ALL_HOLDERS.set(id, holder);

    return id;
  }

  public static [InputCommand.DEPOSIT](id: number, amount: number) {
    const holder = getHolderById(id);
    const checkResult = holder.checkIsDepositPossible(amount);

    if (Number.isNaN(checkResult)) {
      throw new Error(checkResult as ErrorMessage);
    }

    return holder.deposit(amount, 'I should to call check* method before this operation');
  }

  [InputCommand.WITHDRAW](id: number, amount: number) {
    const holder = getHolderById(id);
    const checkResult = holder.checkIsWithdrawPossible(amount);

    if (Number.isNaN(checkResult)) {
      throw new Error(checkResult as ErrorMessage);
    }

    return holder.withdraw(amount, 'I should to call check* method before this operation');
  };

  [InputCommand.BALANCE] = (id: number) => getHolderById(id).getBalance();

  [InputCommand.TRANSFER](sourceAccountId: number, targetAccountId: number, amount: number) {
    const sender = getHolderById(sourceAccountId);
    const receiver = getHolderById(targetAccountId);
    const senderCheckResult = sender.checkIsWithdrawPossible(amount);
    const receiverCheckResult = receiver.checkIsDepositPossible(amount);

    if ([senderCheckResult, receiverCheckResult].some((checkResult) => Number.isNaN(checkResult))) {
      return 'failure';
    }

    sender.withdraw(amount, 'I should to call check* method before this operation');
    receiver.deposit(amount, 'I should to call check* method before this operation');

    return 'successful';
  };
}