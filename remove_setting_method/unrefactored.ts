class Person {
    private id: BigInt;
  
    private name: string;
  
    public getName(): string {
      return this.name;
    }
  
    public setName(name: string): void {
      this.name = name;
    }
  
    public getId(): BigInt {
      return this.id;
    }
  
    public setId(id: BigInt): void {
      this.id = id;
    }
  }
  