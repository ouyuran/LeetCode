export default function fn(s: string): 'Radiant' | 'Dire' {
  const arr: (string | null)[] = s.split('');
  let current = 0;
  console.log(arr);
  while (true) {
    const opp = getNextOpp(current);
    if(opp === -1) {
      return s[current] === 'R' ? 'Radiant' : 'Dire';
    } else {
      vote(opp);
    }
    current = next(current);
  }

  /*
    Treat as a ring
  */
  function next(i: number): number {
    const n = i === s.length - 1 ? 0 : i + 1;
    if(arr[n]) {
      return n;
    } else {
      return next(n);
    }
  }

  /* 
    Return next index of opposite, return -1 if not found any
  */
  function getNextOpp(i: number): number {
    
    let current = next(i);

    while(current !== i) {
      if(arr[current] !== arr[i]) {
        return current;
      }
      current = next(current);
    }

    return -1;
  }

  function vote(i: number): void {
    arr[i] = null;
    console.log(arr);
  }
}

// export default function fn(s: string): 'Radiant' | 'Dire' {
//   let pre: string = '';
//   let current: string = s;
//   while (current !== pre) {
//     pre = current;
//     current = doFn(current);
//   }
//   return current[0] === 'R' ? 'Radiant' : 'Dire';
// }

// function doFn(s: string): string {
//   console.log('******************')
//   let voted: string[] = [];
//   const notVoted: string[] = [];

//   for (let i = 0; i < s.length; i++) {
//     const current = s[i];
//     if (canVote(current)) {
//       const toVoteIndex = voted.findIndex(v => v !== current); // to vote someone in voted list
//       if (toVoteIndex !== -1) {
//         voted = [
//           ...voted.slice(0, toVoteIndex),
//           ...voted.slice(toVoteIndex + 1),
//           current
//         ]
//       } else {
//         notVoted.push(current);
//       }
//     } else {
//       const vote = notVoted.pop() as string;
//       voted.push(vote);
//     }

//     console.log('=============' + current)
//     console.log(voted)
//     console.log(notVoted)
//   }

//   return [...voted, ...notVoted].join('');

//   function canVote(current: string) {
//     return notVoted.length === 0 || notVoted[notVoted.length - 1] === current;
//   }
// }