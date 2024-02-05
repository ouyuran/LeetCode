export default function oddEvenList(head: ListNode | null): ListNode | null {
  let left = head;
  let right = head?.next;
  console.log(toArray(head))
  let rightBegin = right;
  while(left && right && right?.next) {
    console.log('===========')
    console.log(toArray(head))
    console.log(`left ${left.val}, right ${right.val}`)
    const temp = right.next;
    right.next = temp.next;
    left.next = temp;
    temp.next = rightBegin as ListNode;
    right = right.next;
    left = left.next;
    console.log(toArray(head))
  }

  return head;
};

export function toArray(head: ListNode | null): number[] {
  const out = [];
  let current = head;
  while(current) {
    out.push(current.val);
    current = current.next;
  }
  return out;
}

export interface ListNode {
  val: number
  next: ListNode | null
}