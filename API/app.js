const users = require("./users");

users.showUsers();
users.showUserObj(3);
users.showUserObj(1);
console.log(users.usersLength);

const myModules = require("../mymodule");
myModules.readModuleName();
