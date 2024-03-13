type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): Counter {
  let count = init;

  return {
    increment: function () {
      return ++count;
    },
    reset: function () {
      return (count = init);
    },
    decrement: function () {
      return --count;
    },
  };
}

const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
