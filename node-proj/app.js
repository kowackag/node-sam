const fetch = require("node-fetch");

// const year = process.argv[2] || Math.floor(Math.random() * 2000);

// fetch(`http://numbersapi.com/${year}/year?json`)
//   .then((resp) => {
//     if (resp.ok) return resp.json();
//   })
//   .then((data) => console.log(data.text))
//   .catch((err) => console.log(err));

// --------- ZADANIE 2--------

//http://numbersapi.com/${number}/4{type}?json

// const readline = require("readline");

const arg = process.argv[2];
let type = "";

if (arg.indexOf("--year") === 0) {
  type = "year";
} else if (arg.indexOf("--math") === 0) {
  type = "number";
} else if (arg.indexOf("--trivia") === 0) {
  type = "trivia";
}

const equalSign = arg.search("=");
if (equalSign === -1) {
  console.log("nie ma");
}

const number = arg.slice(equalSign + 1);
if ((number === "" || isNaN(Number(number)))) {
  console.log(number);
  return;
}

fetch(`http://numbersapi.com/${number}/${type}?json`)
  .then((resp) => {
    console.log(resp.ok);
    if (resp.ok) {
      return resp.json();
    }
    return;
  })
  .then((data) => console.log(data.text))
  .catch((err) => console.log(err));
