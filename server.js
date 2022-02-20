
const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
const { getBirthdays, insertBirthday, updateBirthDate, deleteBirthDate } = require('./controllers/birthday');


app.get("/get_birthday", (req, res) => {
    const dateFrom = req.body.date_from;
    const dateTo = req.body.date_to;
    getBirthdays(dateFrom, dateTo).then((result) => {
        res.json(result)
    })
})
app.post("/insert_birth_date", (req, res) => {
    const name = req.body.name;
    const photo = req.body.photo;
    const birthDate = req.body.birthdate;
    const email = req.body.email;
    const phone = req.body.phone;
    const title = req.body.title;
    const description = req.body.description;
    insertBirthday(name, photo, birthDate, email, phone, title, description).then((result) => {
        res.json(result)
    }).catch(err =>{
        console.log(err)
        res.send("Something went wrong, please try later.").status(500);
        
    })
})
app.put("/update_birth_date", (req, res) => {
    const name = req.body.name;
    const photo = req.body.photo;
    const birthDate = req.body.birthdate;
    const email = req.body.email;
    const phone = req.body.phone;
    const title = req.body.title;
    const description = req.body.description;
    const id = req.body.id;


    updateBirthDate(name, photo, birthDate, email, phone, title, description, id).then((result) => {
        res.json(result)
    })
})
app.delete("/delete_birth_date", (req, res) => {
    const id = req.body.id;
    deleteBirthDate(id).then((result) => {
        res.json(result)
    })
})

const port = 5000;

server.listen(port, () => console.log("server pokrenut"))

