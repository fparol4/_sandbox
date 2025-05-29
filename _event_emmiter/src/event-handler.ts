import { linkedlist, Node } from "../lib/linked-list.ts";

const v4 = crypto.randomUUID;
const logger = console.log;

type EventHandler = (event: Event) => void;

class EventEmmitter {
  private _eventhandlers: Map<string, Node<EventHandler>> = new Map();

  private _startevent(eventname: string, handler: EventHandler) {
    const s_node = linkedlist.build<EventHandler>([
      handler,
    ]) as Node<EventHandler>;
    this._eventhandlers.set(eventname, s_node);
  }

  public on(eventname: string, handler: EventHandler) {
    const subs = this._eventhandlers.get(eventname);
    if (!subs) {
      this._startevent(eventname, handler);
      return;
    }
    const u_subs = linkedlist.appendleft(subs, handler);
    this._eventhandlers.set(eventname, u_subs);
    logger({ u_subs });
  }
}

const em = new EventEmmitter();
// logger("helloworlkd");
em.on("event_1", () => console.log("handler_2"));
em.on("event_1", () => console.log("handler_2"));
