import { generateId } from "./utils/generate-id.util";

export class Holder {
  private constructor(
    private fullName: string,
    private id: number
  ) { }


  public static create(fullName: string) {
    return new Holder(fullName, generateId())
  }

  public getFullName() {
    return this.fullName;
  }

  public getId() {
    return this.id
  }

}