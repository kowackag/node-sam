const express = require("express");
const app = express();
app.listen(3000, () => {
  console.log("server is leastening");
});

// app.get("/", () => {
//   console.log('Hello');
// })

// app.get("/hi", (req) => {
//   // console.log(req.hostname);
//   console.log(req.method);
// })

// app.all("/", (req) => {
//   // console.log(req.query);
//   console.log(req.get("Referer"));
// });

app.get("/", (req, res) => {
  // console.log(req.query);
  console.log("Spis osób");

  //res.redirect("https://google.com");
  //res.sendStatus(302);
  res.send("Hello word, my world".split(" "));
  //res.end();
});

app.get("/:id", (req) => {
  // console.log(req.query);
  console.log(`Osoba id ${id}`);
});

app.post("/", (req, res) => {
  // console.log(req.query);
  console.log("Dodawanie osoby");
});

app.patch("/:id", (req) => {
  // console.log(req.query);
  console.log(`Aktualizacja osoby nr ${id}`);
});

app.delete("/:id", (req) => {
  // console.log(req.query);
  console.log(`usuwanie osoby nr ${id}`);
});

app.get("/hello/new-user", (req) => {
  console.log("Hello nowy-user");
});

app.get("/hello/:name/", (req) => {
  console.log(req.params);
  console.log(`Hello ${req.params.name}`);
});

app.get("/article/:id/:title?", (req) => {
  console.log(req.params);
});
