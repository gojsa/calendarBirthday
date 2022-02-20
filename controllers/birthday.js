const { db_connection } = require("../config/mysql")



const getBirthdays = (dateFrom, dateTo) => new Promise((res, rejact) => {
    let date = new Date(dateFrom);
    let dateToSend1 = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();

    let date2 = new Date(dateTo);
    let dateToSend2 = date2.getFullYear() + '/' + (date2.getMonth() + 1) + '/' + date2.getDate();

    const query = `
    select * from birthdays where birthdate between '${dateToSend1}' and  '${dateToSend2}';`;
    db_connection.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res({
                success: "",
                error: "error",
                message: "Something went wrong, please try later."
            })
        } else {
            res(results);
            
        }

    });
})
const insertBirthday = (name, photo, birthDate, email, phone, title, description) => new Promise((res, rejact) => {
    let date = new Date(birthDate);
    let dateToSend = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
    const query = `call calendar.insert_birth_date('${name}', '${photo}', '${dateToSend}', '${email}', '${phone}', '${title}', '${description}'); `;
    db_connection.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res({
                success: "",
                error: "error",
                message: "Something went wrong, please try later."
            })
        } else {
            res({
                success: "success",
                error: "",
                message: "Inserted successfully."
            })
        }


    });
})
const updateBirthDate = (name, photo, birthDate, email, phone, title, description, id) => new Promise((res, rejact) => {

    let date = new Date(birthDate);
    let dateToSend = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
    const query = `call calendar.update_birthdate('${name}', '${photo}', '${dateToSend}', '${email}', '${phone}', '${title}', '${description}',${id}); `;
    db_connection.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res({
                success: "",
                error: "error",
                message: "Something went wrong, please try later."
            })
        } else {
            res({
                success: "success",
                error: "",
                message: "successfully updated."
            })
        }

    });
})
const deleteBirthDate = (id) => new Promise((res, rejact) => {

    const query = `call calendar.delete_birthdate(${id}); `;
    db_connection.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res({
                success: "",
                error: "error",
                message: "Something went wrong, please try later."
            })
        } else {
            res({
                success: "success",
                error: "",
                message: "successfully deleted."
            })
        }

    });
})
module.exports = { getBirthdays, insertBirthday, updateBirthDate, deleteBirthDate };