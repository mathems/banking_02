import { Holder } from "./holder";
import { ErrorMessage } from "./types/error-message.enum";

export const ALL_HOLDERS = new Map<number, Holder>();

export function getHolderById(id: number) {
  const holder = ALL_HOLDERS.get(id);

  if (!holder) {
    throw new Error(ErrorMessage.HOLDER_NOT_FOUNT);
  }

  return holder;
}