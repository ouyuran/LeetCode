import MyPromise from "../src/promise";

async function run() {
  await doRun();
}

async function doRun() {
  console.log(1)
  const p = new MyPromise((res, rej) => {
    setTimeout(() => {
      res(3);
      console.log('after res')
    }, 1000)
  })

  p.then(res => {
    console.log('then1')
    console.log(res);
    return new MyPromise(res => {
      res('Return a new promise in then')
    })
  }).then(res => {
    console.log(res);
    throw Error('throw in then')
  }).catch(err => {
    console.log(err)
  }).finally(() => {
    console.log('finally')
  })

  // p.then()
  // .then(res => {
  //   console.log('then1')
  //   console.log(res);
  //   return 'then2 return'
  // }).then(res => {
  //   console.log(res);
  // })

  // p.then(res => {
  //   console.log('then2')
  //   console.log(res);
  //   throw Error('then2 fail')
  // }).then(res => {
  //   console.log(res);
  // }, rej => {
  //   console.log(rej)
  // })
  console.log(2)
}

run();