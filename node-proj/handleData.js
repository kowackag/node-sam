const fs = require("fs");

const handleData = (type, title) => {
    const data = fs.readFileSync("data.json");
    const tasks = JSON.parse(data);
  
    if (type === 1 || type === 2) {
      const isExist = tasks.find((task) => task.title === title) ? true : false;
      if (type === 1 && isExist) {
        return console.log("Zadanie o takiej nazwie już istnieje");
      } else if (type === 2 && !isExist) {
        return console.log("Zadanie o takiej nazwie nie istnieje");
      }
    }
  
    switch (type) {
      case 1:
        const id = Math.floor(Math.random() * 100 + 1);
        tasks.push({ id, title });
        console.log(id, title)
        fs.writeFileSync("data.json", JSON.stringify(tasks));
        break;
      case 2:
        const ind = tasks.findIndex((task) => task.title === title);
        tasks.splice(ind);
        fs.writeFile("data.json", JSON.stringify(tasks), 'utf8',  (err)=> {
          if (err) throw err;
        });
        break;
      case 3: 
        if (tasks.length) { 
          tasks.forEach(({title})=>console.log(title))
        }
    }
  };

  module.exports = handleData;