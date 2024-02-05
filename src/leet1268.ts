export default function suggestedProducts(products: string[], searchWord: string): string[][] {
    const tire = new Trie();
    products.forEach(p => tire.insert(p));
    const out = [];
    for (let i = 0; i < searchWord.length; i++) {
      const currentSearchWord = searchWord.substring(0, i + 1);
      const r = tire.getMatchWords(currentSearchWord);
      out.push(r);
    }
    return out;
};

class Trie {
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

  getMatchWords(s: string): string[] {
    const lastNode = this.searchLastNode(s);
    const out: string[] = [];
    if (!lastNode) return [];
    if (lastNode.isEnd) out.push('')
    lastNode.next.forEach(n => {
      walk(n, '');
    })
    return out.map(w => s + w).sort().slice(0, 3);

    function walk(cur: Node, prefix: string): void {
      if (cur.isEnd) {
        out.push(prefix + cur.char);
      }
      cur.next.forEach(n => {
        walk(n, prefix + cur.char);
      })
    }
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