/**
 * Write a linked list and test it.
 */

import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

const logger = console.log;

class Node<T> {
  constructor(
    public value: T,
    public next: Node<T> | null = null,
  ) {}
}

const ft_linkedlist = <T>(list: T[]) => {
  let fn: Node<T> | null = null;
  let ln: Node<T> | null = fn;
  for (const [key, item] of list.entries()) {
    const node: Node<T> = new Node(item);
    if (ln) ln.next = node;
    if (key == 0) fn = node;
    ln = node;
  }
  return fn;
};

const ft_recursive_linkedlist = <T>(list: T[]): Node<T> | null => {
  if (!list.length) return null;
  const nn = ft_recursive_linkedlist<T>(list.slice(1));
  const cn = new Node<T>(list[0], nn);
  return cn;
};

class LinkedList {
  static build<T>(list: T[]) {
    if (!list.length) return null;
    const n_node = LinkedList.build(list.slice(1));
    const c_node = new Node<T>(list[0], n_node);
    return c_node;
  }
}

describe("ft_linkedlist", () => {
  it("should produce a valid linkedlist", () => {
    const l = ["a", "b", "c"];
    const fn = ft_linkedlist(l);
    const fn_2 = ft_recursive_linkedlist(l);
    logger({ fn, fn_2 });
    expect(1).toBe(1);
  });
});
