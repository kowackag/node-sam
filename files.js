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
console.log(process.argv);
console.log("----------------------------------------------------------");
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
  if (isNaN(value)) {
    console.log("Wprowadź liczbę".red);
    return false;
  }
  if (value < 1 || value > 10) {
    console.log("Wprowadz liczbę z przedziału 1-10".red);
    return false;
  }

  return true;
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
