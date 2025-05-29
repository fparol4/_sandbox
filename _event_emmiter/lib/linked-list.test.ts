/**
 * Write a linked list and test it.
 */

import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import { linkedlist, Node } from "./linked-list.ts";

describe("ft_linkedlist", () => {
  it("should produce a valid linkedlist", () => {
    const list = ["a", "b", "c"];
    let s_node = linkedlist.build<string>(list) as Node<string>;

    let i = 0;
    while (s_node?.next) {
      expect(list[i]).toBe(s_node.value);
      s_node = s_node.next;
      ++i;
    }
  });

  it("should return empty node when only one item", () => {
    const list = ["a"];
    const s_node = linkedlist.build<string>(list) as Node<string>;
    expect(list[0]).toBe(s_node.value);
    expect(s_node.next).toBe(null);
  });

  it("should return null when no item is passed", () => {
    const list: string[] = [];
    const s_node = linkedlist.build(list);
    expect(s_node).toBe(null);
  });
});

describe("find_linkedlist", () => {
  it("should find element on linkedlist", () => {
    const t_case = "case_3";
    const list = ["case_1", "case_2", "case_3"];
    const s_node = linkedlist.build(list) as Node<string>;

    const fn_compare = (node: Node<string>) => node.value == t_case;
    const found = linkedlist.find<string>(s_node, fn_compare);
    expect(found?.value).toBe(t_case);
  });

  it("should not find element on linkedlist", () => {
    const t_case = "case_4";
    const list = ["case_1", "case_2", "case_3"];
    const s_node = linkedlist.build(list) as Node<string>;

    const fn_compare = (node: Node<string>) => node.value == t_case;
    const found = linkedlist.find(s_node, fn_compare);
    expect(found).toBe(null);
  });
});
