const { db_connection } = require("../config/mysql")



const getBirthdays = (dateFrom, dateTo) => new Promise((res, rejact) => {
    let date = new Date(dateFrom);
    let dateToSend1 = date.getFullYear() + '/' + ( date.getMonth()+1) + '/' + date.getDate();

    let date2 = new Date(dateTo);
    let dateToSend2 = date2.getFullYear() + '/' + ( date2.getMonth()+1) + '/' + date2.getDate();

    const query = `
    select * from birthdays where birth_date between '${dateToSend1}' and  '${dateToSend2}';`;
    db_connection.query(query, (err, results) => {
        if (err) console.error(err);
        res(results);

    });
})
const insertBirthday = (name, photo, birthDate, email, phone, title, description) => new Promise((res, rejact) => {
    let date = new Date(birthDate);
    let dateToSend = date.getFullYear() + '/' + ( date.getMonth()+1) + '/' + date.getDate();
   

   
    const query = `call calendar.insert_birth_date('${name}', '${photo}', '${dateToSend}', '${email}', '${phone}', '${title}', '${description}'); `;
    db_connection.query(query, (err, results) => {
        if (err) console.error(err);
        res(results);

    });
})
module.exports = { getBirthdays, insertBirthday };