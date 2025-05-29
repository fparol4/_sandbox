export class Node<T> {
  constructor(
    public value: T,
    public next: Node<T> | null = null,
  ) {}
}

const build = <T>(list: T[]): Node<T> | null => {
  if (!list.length) return null;
  const n_node = build<T>(list.slice(1));
  const c_node = new Node<T>(list[0], n_node);
  return c_node;
};

const find = <T>(s_node: Node<T>, compare: (node: Node<T>) => boolean) => {
  let c_node = s_node;
  while (c_node?.value) {
    if (compare(c_node)) {
      return c_node;
    }
    // @ts-ignore
    c_node = c_node.next;
  }
  return null;
};

const appendleft = <T>(s_node: Node<T>, to_append: T) => {
  const a_node = new Node(to_append);
  a_node.next = s_node;
  return a_node;
};

export const linkedlist = {
  build,
  find,
  appendleft,
};
