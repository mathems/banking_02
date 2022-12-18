import { ALL_HOLDERS, getHolderById } from "./all-holders";
import { Holder } from "./holder";
import { ErrorMessage } from "./types/error-message.enum";
import { InputCommand } from "./types/input_command.enum";
import { TransferResult } from "./types/transfer-result.type";
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
    if (checkResult) {
      return Bank.processErrorMessage(checkResult);
    }
    return holder.deposit(amount, 'I should to call check* method before this operation');
  }

  public static [InputCommand.WITHDRAW](id: number, amount: number) {
    const holder = getHolderById(id);
    const checkResult = holder.checkIsWithdrawPossible(amount);

    if (checkResult) {
      return Bank.processErrorMessage(checkResult);
    }
    return holder.withdraw(amount, 'I should to call check* method before this operation');
  };

  public static [InputCommand.BALANCE] = (id: number) => getHolderById(id).getBalance(); //static

  public static [InputCommand.TRANSFER](sourceAccountId: number, targetAccountId: number, amount: number): `${ErrorMessage}${string}` | TransferResult | never{
    const sender = getHolderById(sourceAccountId);
    const receiver = getHolderById(targetAccountId);
    const senderCheckResult = sender.checkIsWithdrawPossible(amount);
    const receiverCheckResult = receiver.checkIsDepositPossible(amount);

    if (senderCheckResult) {
      return Bank.processErrorMessage(`${senderCheckResult} for account ${sender.getId()}`);
    }

    if (receiverCheckResult) {
      return Bank.processErrorMessage(`${receiverCheckResult} for account ${receiver.getId()}`);
    }

    sender.withdraw(amount, 'I should to call check* method before this operation');
    receiver.deposit(amount, 'I should to call check* method before this operation');
    return 'Successful';
  };
  private static throwError = false;
  public static setThrowOnError(allowThrowing: boolean) {
    Bank.throwError = allowThrowing;
  }

  private static processErrorMessage(errorMessage: `${ErrorMessage}${string}`) {
    if (Bank.throwError) throw new Error(errorMessage);

    return errorMessage;
  }
}

