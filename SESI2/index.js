function myDisplayer1(some) {
  //   document.getElementById("demo").innerHTML = some;
  console.log(some);
}

function myCalculator1(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = myCalculator1(5, 5);
myDisplayer1(result);

// async
function myDisplayer(some) {
  //   document.getElementById("demo").innerHTML = some;
  console.log(some);
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

// Callback VS Promise
// Callback style
setTimeout(function () {
  myFunction("I Love You !!!");
}, 3000);

function myFunction(value) {
  //   document.getElementById("demo").innerHTML = value;
  console.log(value);
}

let myPromise = new Promise(function (myResolve, myReject) {
  setTimeout(function () {
    myFunction("I Love You !!!");
  }, 3000);
});

myPromise.then(function (value) {
  //   document.getElementById("demo").innerHTML = value;
  console.log(value);
});



function showInTerminal(message) {
  console.log(message);
}

async function greeting(name, fnc = showInTerminal) {
  const value = `Hallo ${name}`;

  setTimeout(() => fnc(value), 1500);

  return "Perintah selesai dijalankan";
}

async function start() {
  console.log(await greeting("Alvin"));
}

start();
