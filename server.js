const express = require("express")
const app = express()
app.use(express.json()); // należy pamiętać o nagłówku w fetch-u
// app.use(express.text()) // w razie problemów z danymi użyj text()

let data = new Date()
let users = [
    { id: 0, login: "Zuzai", haslo: "Pingiwn", registered: data.getTime() }
]

function isAvaiable(login, password) {

    if (users.find(user => user.login == login)) {
        return false
    }
    users.push({ id: users.length - 1, login: login, haslo: password, registered: data.getTime() })
    return true
}

const PORT = 3000;
app.get("/", function (req, res) {
    console.log(req.body)
    console.log("JEST Get")
    res.send(JSON.stringify(users))
})

app.post("/", function (req, res) {
    console.log("JEST POST")
    console.log(req.body)
    let odp = { bool: isAvaiable(req.body.login) }
    console.log(odp)
    res.send(JSON.stringify(odp))
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
    console.log(JSON.stringify(users))
})
