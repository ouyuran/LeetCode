export default class LRUCache {
  private map: Map<number, AgeNode>;
  private capacity: number;
  private ageHead: AgeNode;
  private ageTail: AgeNode;
  constructor(capacity: number) {
    this.map = new Map();
    this.capacity = capacity;
    // @ts-ignore
    this.ageHead = { next: null, pre: null };
    // @ts-ignore
    this.ageTail = { next: null, pre: null };
  }

  get(key: number): number {
    const node = this.map.get(key);
    if (node) {
      this.moveToHead(node);
      return node.value;
    } else {
      return -1;
    }
  }

  put(key: number, value: number): void {
    if (this.map.size === 0) {
      // @ts-ignore
      const node: AgeNode = { key: key, value: value, next: null, pre: null };
      this.ageHead.next = node;
      node.next = this.ageTail;
      node.pre = this.ageHead;
      this.ageTail.pre = node;
      this.map.set(key, node);
    } else if (this.map.has(key)) {
      const node = this.map.get(key) as AgeNode;
      node.value = value;
      this.moveToHead(node);
    } else {
      // @ts-ignore
      const node: AgeNode = { key: key, value: value, next: null, pre: null };
      this.addToHead(node);
      this.map.set(key, node);
      if (this.map.size > this.capacity) {
        const oldest = this.ageTail.pre;
        this.map.delete(oldest.key);
        this.ageTail.pre = oldest.pre;
        oldest.pre.next = this.ageTail;
      }
    }
  }

  moveToHead(node: AgeNode): void {
    if (node.pre !== this.ageHead) {
      node.pre.next = node.next;
      node.next.pre = node.pre;
      this.addToHead(node);
    }
  }

  addToHead(node: AgeNode): void {
    node.next = this.ageHead.next;
    this.ageHead.next = node;
    node.next.pre = node;
    node.pre = this.ageHead;
  }
}

type AgeNode = {
  key: number
  value: number
  next: AgeNode
  pre: AgeNode
}