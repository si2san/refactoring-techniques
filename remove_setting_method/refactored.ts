class Person1 {
  private id: BigInt;

  private name: string;

  constructor(id: BigInt) {
    this.id = id;
  }

  public getId(): BigInt {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  /**
   * Only Name should able to change after Person is instanced.
   * ID shouldn't change.
   */
  public setName(name: string): void {
    this.name = name;
  }
}
