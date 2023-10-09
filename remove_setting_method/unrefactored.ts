class Person {
    private id: bigint;
  
    private name: string;
  
    public getName(): string {
      return this.name;
    }
  
    public setName(name: string): void {
      this.name = name;
    }
  
    public getId(): bigint {
      return this.id;
    }
  
    public setId(id: bigint): void {
      this.id = id;
    }
  }
  