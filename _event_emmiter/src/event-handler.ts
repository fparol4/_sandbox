import { Subscription } from "./subscription.ts";
import { Event } from "./event.ts";
import { v4 } from "../misc.ts";

// TODO: unify the EventPool and EventHandler into EventEmmiter;
// TODO: write the unity tests to run this file;

class EventPool {
  private _subscriptions: Map<string, EventHandler> = new Map();

  public emit(event: Event) {
    const handlers = this._subscriptions
      .values()
      .filter((h) => h.eventname === event.name);
    handlers.forEach((h) => h.broadcast(event));
  }

  public subscribe(handler: EventHandler) {
    const id = v4();
    this._subscriptions.set(id, handler);
  }
}

class EventHandler {
  public eventname: string;
  private _subscriptions: Map<string, Subscription> = new Map();

  constructor(eventname: string) {
    this.eventname = eventname;
  }

  public subscribe(subscription: Subscription) {
    this._subscriptions.set(subscription.id, subscription);
  }

  public unsubscribe(id: string) {
    this._subscriptions.delete(id);
  }

  public broadcast(event: Event) {
    this._subscriptions.forEach((sub) => sub.callback(event));
  }
}
