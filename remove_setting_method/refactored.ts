class Person1 {
  private id: bigint;

  private name: string;

  constructor(id: bigint) {
    this.id = id;
  }

  public getId(): bigint {
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
