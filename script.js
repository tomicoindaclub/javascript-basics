function returnZero(number) {
  number = 0;
  return number;
}

function returnYourName(name) {
  name = "Petruska Tamás";
  return name;
}

function returnTrue(boolean) {
  boolean = true;
  return boolean;
}

console.log(`
The\x1b[32m returnZero()\x1b[0m function is returning \x1b[35m${returnZero()}\x1b[0m.
The type of the returned value is \x1b[35m${typeof returnZero()}\x1b[0m.

The\x1b[32m returnYourName()\x1b[0m function is returning \x1b[35m${returnYourName()}\x1b[0m.
The type of the returned value is \x1b[35m${typeof returnYourName()}\x1b[0m.

The\x1b[32m returnTrue()\x1b[0m function is returning \x1b[35m${returnTrue()}\x1b[0m.
The type of the returned value is \x1b[35m${typeof returnTrue()}\x1b[0m.
`);
