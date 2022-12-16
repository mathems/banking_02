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

  public getFullName() {
    return this.fullName;
  }

  public getId() {
    return this.id
  }

}