// const fs = require("fs").promises;

// const test = fs
//   .readdir(__dirname)
//   .then((files) =>
//     files.map(async (filename) => {
//       const stats = await fs.stat(filename);
//       return {
//         Name: filename,
//         Size: stats.size,
//         Date: stats.mtime,
//       };
//     })
//   )
//   .then((result) => console.table(result));
// console.log(test);



console.log("----------------------------------------------------------");
// console.log(process.argv);
let person1 = { name: "Adam" };
let person2 = person1; // przypisanie referencji do tego samego obiektu
console.log(person1); // {name: "Adam"};
console.log(person2); // {name: "Adam"};
person2.name = "Jan"; // przypisanie nowej wartości
console.log(person1); // {name: "Jan"};
console.log(person2); // {name: "Jan"};
console.log(1, person1 === person2);
let person3 = { name: "Adam" };
let person4 = { name: "Adam" }; // tu już nie ma przypisania więc tworzony jest nowy obiekt
console.log(2, person3 === person4); // false => bo porównujemy referencję do obiektu
console.log("----------------------------------------------------------");

function checkStorage(available, ordered) {
  // Change code below this line

  if (ordered === 0) return "Your order is empty!";
  if (ordered > available)
    return "Your order is too large, not enough goods in stock!";
  return "The order is accepted, our manager will contact you";

  // Change code above this line
}
console.log(checkStorage(4, 10));
console.log(checkStorage(4, 0));
console.log(checkStorage(14, 10));

const arr = [1, 3, 4, 0].filter((item) => item > 2); // => [3,4]

console.log(arr);

// fs.readdir(__dirname)
//   .then((files) => {
//     return Promise.all(
//       files.map(async (filename) => {
//         const stats = await fs.stat(filename);
//         console.log(stats);
//         return {
//           Name: filename,
//           Size: stats.size,
//           Date: stats.mtime,
//         };
//       })
//     );
//   })
//   .then((result) => console.table(result));
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.on("line", (cmd) => {
//   console.log(`You type: ${cmd}`);
// });

// rl.question("Jak się nazywasz?", (answer) => {
//   console.log(`Miło CIę poznać ${answer}`);
// });
// rl.pause();

const readline = require("readline");
const fs = require("fs").promises;

const { program } = require("commander");
require("colors");

program.option(
  "-f, --file [type]",
  "file for saving game result",
  "result.txt"
);

program.parse(process.argv);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
const logFile = program.opts().file;
const mind = Math.floor(Math.random() * 10) + 1;

const isValid = (value) => {
  if (isNaN(value)) console.log("Wprowadź liczbę".red);
  console.log("Wprowadź liczbę".red);
  //   return false;

  // if (value < 1 || value > 10) {
  //   console.log("Wprowadz liczbę z przedziału 1-10".red);
  //   return false;
  // }

  // return true;
};

const log = async (data) => {
  try {
    await fs.appendFile(logFile, `${data}\n`);
    console.log("Sukces".green);
  } catch (err) {
    console.log(`Błąd: ${err}`);
  }
};

const game = () => {
  rl.question("Wprowadź liczbę od 1 do 10: ".yellow, async (value) => {
    value = Number.parseInt(value, 10);
    if (!isValid(value)) {
      game();
      return;
    }
    count++;
    console.log(mind);
    if (value === mind) {
      console.log("Gratulacje.Odgadłeś liczbę za %d razem".green, count);
      await log(
        `${new Date().toLocaleDateString()}: Gratulacje.Odgadłeś liczbę za ${count} razem`
      );
      rl.close();
      return;
    }
    console.log("Nie udało się. kolejna próba");
    game();
  });
};

game();
