type P = Promise<number>;

const addTwoPromises = (promise1: P, promise2: P): P =>
  Promise.all([promise1, promise2]).then((value) => value[0] + value[1]);

addTwoPromises(Promise.resolve(2), Promise.resolve(1)).then(console.log); // 4
