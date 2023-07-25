const users = [
  { id: 1, name: "Adam1" },
  { id: 2, name: "Adam2" },
  { id: 3, name: "Adam3" },
];

module.exports = {
  showUsers() {
    const names = users.map((user) => user.name);
    console.log("Nasi users to:");
    names.forEach((name) => console.log(name));
  },
  showUserObj(id) {
    console.log("szukany user to:");
    const searchingUser = users.find((user) => user.id === id);
    console.log(searchingUser);
  },
  usersLength: users.length,
};
