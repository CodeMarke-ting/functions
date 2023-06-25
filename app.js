// closure

function outer() {
  // lexical scope
  let sum = 0;

  function inner(digit) {
    console.log((sum += digit));
  }

  return inner;
}

const sum = outer();

// sum(10); // 0 + 10 = 10

// sum(20); // 10 + 20 = 30

// sum(40); //30 + 40 = 70

let digit = 5;

Number.prototype.add = function (num) {
  if (!num) {
    return this;
  } else {
    return this + num;
  }
};

Number.prototype.substract = function (num) {
  if (!num) {
    return this;
  } else {
    return this - num;
  }
};

let result = (5).add().substract(10);

console.log(result);
