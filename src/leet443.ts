function compress(chars: string[]): number {
  let pre: string = '';
  let writeIndex = 0;
  let repeatCount = 0;

  for(let i = 0; i < chars.length; i++) {
    if(chars[i] !== pre) {
      const current = chars[i];
      writeIndex = write(chars, writeIndex, pre, repeatCount);
      pre = current;
      repeatCount = 1;
    } else {
      repeatCount++;
    }
  }

  return write(chars, writeIndex, pre, repeatCount);
};

function write(chars: string[], writeIndex: number, pre: string, count: number): number {
  if(count === 0) return writeIndex;
  const s = `${pre}${count > 1 ? count : ''}`;
  for(let i = 0; i < s.length; i++) {
    chars[writeIndex++] = s[i];
  }
  return writeIndex;
}