const os = require("os");

console.log(os.totalmem());
console.log(Object.getOwnPropertyNames(global).length);
console.log(global.hasOwnProperty("os"));
console.log(process.argv);
console.log(process.env);

console.log("end repl module");
