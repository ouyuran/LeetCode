export default function removeStarts(s: string): string {
  const stack: string[] = [];
  for(let i = 0; i < s.length; i++) {
    const current = s[i];
    if(current !== '*') {
      stack.push(current);
    } else {
      stack.pop();
    }
  }
  return stack.join('');
}