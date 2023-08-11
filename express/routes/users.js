function usersRoutes(app) {
  app.get("/", (req, res) => {
    //const fileName = "index.html";
    console.log(req.cookies);
    const { name } = req.cookies.name;
    if (name) {
      res.send(`Witaj ${name}`);
    } else {
      res.send(`Kim jestes??`);
    }
  });

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
}

module.exports = usersRoutes;
