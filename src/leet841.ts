export default function fn(room: number[][]): boolean {
  const opened: Set<number> = new Set();
  openRoom(0);
  return opened.size === room.length;

  function openRoom(i: number): void {
    if(opened.has(i)) return;
    opened.add(i);
    room[i].forEach(key => openRoom(key))
  }
}

