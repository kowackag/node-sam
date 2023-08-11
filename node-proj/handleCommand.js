const handleData  = require('./handleData');
const handleCommand = ({ add, remove, list }) => {
  if (add) {
    console.log(add);
    handleData(1, add);
  } else if (remove) {
    console.log(remove);
    handleData(2, remove);
  } else if (list) {
    handleData(3, null);
    console.log(list);
  }
};

module.exports = handleCommand;
