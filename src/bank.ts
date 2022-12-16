import { Holder } from "./holder";
import { InputCommand } from "./types/input_command.enum";
import { generateId } from "./utils/generate-id.util";


const ALL_HOLDERS = new Map<number, Holder>();
const COMMAND_EXECUTOR = {
  [InputCommand.CREATE](fullName: string) {
    const id = generateId();
    const holder = Holder.create(fullName, id);

    ALL_HOLDERS.set(id, holder);

    return id;
  }
}
export class Bank {
  public static execute(input: InputCommand) {

  }
}