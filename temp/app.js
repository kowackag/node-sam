const express = require("express");
const path = require("path");
const app = express();

app.listen(3000, () => {
  console.log("Server is running");
});

app.get("/", (req, res) => {
  const fileName = "index.html";

  res.sendFile(fileName, {
    root: path.join(__dirname, ""),
  });
});

// app.get('/logo', (req, res)=>{
//     const fileName = 'oop.jpg';

//     res.sendFile(fileName, {
//         root: path.join(__dirname, 'static'),
//     });
// })

// app.get("/logo", (req, res) => {
//   const fileName = "oop.jpg";

//   res.attachment(fileName, {
//     root: path.join(__dirname, "static"),
//   });
//   res.end();
// });

app.get("/logo", (req, res) => {
  const fileName = path.join(__dirname, "static/oop.jpg");

  res.download(fileName, "ciekawy schemat.jpg");
});

// -------------------COOKIE------------------------------------

app.get("/hi/:name", (req, res) => {
  const name = req.params;
  // const dt = new Date();
  // dt.setDate(dt.getDate() + 1);
  res.cookie("name", name, {
    // expires: dt,
    maxAge: 5 * 60 * 1000,
    httpOnly: true,
  });
  res.send("Send name");
});

app.get('/logout', (req,res)=> {
  
  res.clearCookie('name');
  res.send('wylogowano');
})