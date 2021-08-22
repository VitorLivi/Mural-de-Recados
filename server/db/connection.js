var mysql = require ('mysql')

const { DB_HOST, DB_PASSWORD, DB_USER, DATABASE } = process.env

const con = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DATABASE
})

console.log(process.env)

con.connect((err) => {
    if (err) throw err

    console.log('Successful conected!')
})

module.exports = con