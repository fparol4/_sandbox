export class Event {
  public timestamp: Date;

  constructor(
    public name: string,
    public payload: any,
  ) {
    this.timestamp = new Date().toISOString();
  }
}
