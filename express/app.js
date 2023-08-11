const express = require("express");
const path = require("path");
const app = express();
const cookieParser = require("cookie-parser");
const usersRoutes = require("./routes/users");

app.listen(3000, () => {
  console.log("Server is running");
});

app.use(express.json());
//app.use(express.static(path.join(__dirname, "static")));
app.use(cookieParser());
usersRoutes(app);
app.get("/fun", function (req, res) {
  // Cookies that have not been signed
  console.log("Cookies: ", req.cookies);

  // Cookies that have been signed
  console.log("Signed Cookies: ", req.signedCookies);
});

// app.post("/hello", (req, res) => {
//   console.log(req.body);
//   const { name, surname } = req.body;
//   res.send(`Witaj ${name} ${surname}`);
// });

// app.get("/", (req, res) => {
//   //const fileName = "index.html";
//   console.log(req.cookies);
//   const { name } = req.cookies.name;
//   if (name) {
//     res.send(`Witaj ${name}`);
//   } else {
//     res.send(`Kim jestes??`);
//   }

// Cookies that have been signed
// console.log("Signed Cookies: ", req.signedCookies);

//   res.sendFile(fileName, {
//     root: path.join(__dirname, ""),
//   });
//});

// app.get("/logo", (req, res) => {
//   const fileName = "oop.jpg";

//   res.sendFile(fileName, {
//     root: path.join(__dirname, "static"),
//   });
// });

// app.get("/logo", (req, res) => {
//   const fileName = "oop.jpg";

//   res.attachment(fileName, {
//     root: path.join(__dirname, "static"),
//   });
//   res.end();
// });

// app.get("/logo", (req, res) => {
//   const fileName = path.join(__dirname, "static/oop.jpg");

//   res.download(fileName, "ciekawy schemat.jpg");
// });

// -------------------COOKIE------------------------------------

// app.get("/hi/:name", (req, res) => {
//   const name = req.params;
//   // const dt = new Date();
//   // dt.setDate(dt.getDate() + 1);
//   res.cookie("name", name, {
//     // expires: dt,
//     maxAge: 5 * 60 * 1000,
//     httpOnly: true,
//   });
//   res.send("Send name");
// });

// app.get("/logout", (req, res) => {
//   res.clearCookie("name");
//   res.send("wylogowano");
// });
