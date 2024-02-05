export default class MyPromise {
  status: Status
  value: any
  callbacks: FulfilledRejectedCallBackPair[]

  constructor(exec: Exec) {
    this.status = 'pending';
    this.value = null;
    this.callbacks = [];
    try {
      exec(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }

  resolve(value: any): void {
    if (this.status === 'pending') {
      this.status = 'fulfilled';
      this.value = value;
      setTimeout(() => {
        this.callbacks.forEach(cbPair => {
          cbPair.onFulfilled(this.value);
        })
      })
    }
  }

  reject(reason: any): void {
    if (this.status === 'pending') {
      this.status = 'rejected';
      this.value = reason;
      setTimeout(() => {
        this.callbacks.forEach(cbPair => {
          cbPair.onRejected(this.value);
        })
      })
    }
  }

  then(_onFulfilled?: CallBack, _onRejected?: CallBack): MyPromise {
    return new MyPromise((resolve, reject) => {
      const onFulfilled: CallBack = this.tryCallBack(
        _onFulfilled ?? defaultCallBack,
        resolve,
        reject
      )
      const onRejected: CallBack = this.tryCallBack(
        _onRejected ?? defaultCallBack,
        resolve,
        reject
      )
      if (this.status === 'pending') {
        this.callbacks.push({
          onFulfilled,
          onRejected
        });
      } else if (this.status === 'fulfilled') {
        setTimeout(() => {
          onFulfilled(this.value);
        })
      } else if (this.status === 'rejected') {
        setTimeout(() => {
          onRejected(this.value);
        })
      } else {
        // do nothing
      }
    });
  }

  catch(_onRejected?: CallBack): MyPromise {
    return this.then(undefined, _onRejected);
  }

  finally(_onFinally?: CallBack): MyPromise {
    return this.then(_onFinally, _onFinally);
  }

  // onReject is from next promise
  tryCallBack(cb: CallBack, nextOnResolve: Function, nextOnRejected: Function): CallBack {
    return (value?: any): void => {
      try {
        const result = cb(value);
        if (result instanceof MyPromise) {
          result.then(
            value => nextOnResolve(value),
            reason => nextOnRejected(reason)
          );
        } else {
          nextOnResolve(result);
        }
      } catch (error) {
        nextOnRejected(error);
      }
    }
  }
}

const defaultCallBack: CallBack = (arg: any) => arg
type Status = 'pending' | 'fulfilled' | 'rejected';
type Exec = (res: Function, rej: Function) => any
type CallBack = (arg?: any) => any
type FulfilledRejectedCallBackPair = {
  onFulfilled: CallBack
  onRejected: CallBack
}