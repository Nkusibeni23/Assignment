function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
      console.log(count);
    },
    getCount() {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getCount());
