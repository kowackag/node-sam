const name = "my first Module";



exports.readModuleName = () => console.log(name);

function checkStorage(available, ordered) {
  let message;
  // Change code below this line

  ordered > available
    ? (message = "Not enough goods in stock!")
    : (message = "The order is accepted, our manager will contact you");

  // Change code above this line
  return message;
}

console.log(checkStorage(10, 20));
console.log(checkStorage(50, 30));
