export default class Trie {
  head: Node
  constructor() {
    this.head = new Node('', false);
  }

  insert(word: string): void {
    let cur = this.head;
    word.split('').forEach((c, i) => {
      const matchNode = cur.next.find(n => n.is(c));
      if (matchNode) {
        cur = matchNode;
        if (i === word.length - 1) {
          matchNode.setEnd();
        }
      } else {
        const newNode = new Node(c, i === word.length - 1 ? true : false);
        cur.next.push(newNode);
        cur = newNode;
      }
    })
  }

  search(word: string): boolean {
    const lastNode = this.searchLastNode(word);
    return lastNode?.isEnd ? true : false;
  }

  startsWith(prefix: string): boolean {
    const lastNode = this.searchLastNode(prefix);
    return !!lastNode;
  }

  searchLastNode(s: string): Node | null {
    let cur = this.head;
    for (let i = 0; i < s.length; i++) {
      const matchNode = cur.next.find(n => n.is(s[i]));
      if (matchNode) {
        cur = matchNode;
      } else {
        return null;
      }
    }
    return cur;
  }
}

class Node {
  char: string;
  next: Node[];
  isEnd: boolean
  constructor(c: string, isEnd: boolean) {
    this.char = c;
    this.next = [];
    this.isEnd = isEnd;
  }

  addNext(n: Node) {
    this.next.push(n);
  }

  is(s: string): boolean {
    return this.char === s;
  }

  setEnd() {
    this.isEnd = true;
  }
}