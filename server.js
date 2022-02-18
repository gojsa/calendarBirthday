
const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
const { getBirthdays,insertBirthday } = require('./controllers/birthday');
const { send } = require("process");

app.get("/get_birthday", (req,res) => {
    const dateFrom = req.body.date_from;
    const dateTo = req.body.date_to;
    getBirthdays(dateFrom, dateTo).then((result)=>{
        res.json(result)
    })
})
app.post("/insert_birth_date", (req,res) => {
    const name = req.body.name;
    const photo = req.body.photo;
    const birthDate = req.body.birthdate;
    const email = req.body.email;
    const phone = req.body.phone;
    const title = req.body.title;
    const description = req.body.description;
        insertBirthday(name,photo,birthDate,email,phone,title,description).then(()=>{
            res.end();
        })
})

const port = 5000;

server.listen(port, () => console.log("server pokrenut"))

