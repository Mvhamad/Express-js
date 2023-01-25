const express = require('express')
const app = express()
const port = 5000

// Middleware to verify the time of the request
app.use(function (req, res, next) {
    var time = new Date
    if ((time.getDate() == 0 || time.getDate() == 6) && (time.getHours < 9 || time.getHours > 17)) {
        res.send('The web application is only available during working hours (Monday to Friday,  from 9 to 17)')
    }
    next();
  });

app.use(express.static(__dirname + "/views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("Home");
});
app.get("/services", (req, res) => {
    res.render("Services");
});
app.get("/contact", (req, res) => {
    res.render("Contact");
});
app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:5000/`)
})