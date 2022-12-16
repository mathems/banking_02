import { ALL_HOLDERS, getHolderById } from "./all-holders";
import { Holder } from "./holder";
import { InputCommand } from "./types/input_command.enum";
import { generateId } from "./utils/generate-id.util";


const COMMAND_EXECUTOR = {
  [InputCommand.CREATE](fullName: string) {
    const id = generateId();
    const holder = Holder.create(fullName, id);

    ALL_HOLDERS.set(id, holder);

    return id;
  },
  [InputCommand.DEPOSIT]: (id: number, amount: number) => getHolderById(id).deposit(amount),
  [InputCommand.WITHDRAW]: (id: number, amount: number) => getHolderById(id).withdraw(amount),
  [InputCommand.BALANCE]: (id: number) => getHolderById(id).getBalance(),
}


export class Bank {
  public static execute(input: InputCommand) {

  }
}