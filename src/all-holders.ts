import { Holder } from "./holder";

export const ALL_HOLDERS = new Map<number, Holder>();

export function getHolderById(id: number) {
  const holder = ALL_HOLDERS.get(id);

  if(!holder) {
    throw new Error(`There aren't any holders with such id (${id})!`);
  }

  return holder;
}