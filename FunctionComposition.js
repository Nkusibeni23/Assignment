function compose(...fns) {
  return function (initialValue) {
    return fns.reduceRight((acc, fn) => fn(acc), initialValue);
  };
}

const reverseAndCapitalize = compose(capitalize, reverse);
const result1 = reverseAndCapitalize("hello");

const doubleEvenNumbers = compose(double, filterEven);
const result2 = doubleEvenNumbers([1, 2, 3, 4, 5]);
