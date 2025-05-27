import { Event } from "./event.ts";

export class Subscription {
  constructor(
    public id: string = v4(),
    public callback: (params: Event) => void,
  ) {}
}
