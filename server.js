const express = require("express")
const app = express()
app.use(express.json()); // należy pamiętać o nagłówku w fetch-u
// app.use(express.text()) // w razie problemów z danymi użyj text()

let data = new Date()
let users = [
    { id: 0, login: "Zuzanna Zawartka", password: "Pingiwn", registered: data.getTime() }
]

function isAvaiable(login, password) {

    if (users.find(user => user.login == login)) {
        return false
    }
    let id;
    if (users.length > 0) {
        id = users.length
    } else {
        id = 0;
    }

    users.push({ id: id, login: login, password: password, registered: data.getTime() })
    return true
}

const PORT = 3000;
app.get("/", function (req, res) {
    console.log(req.body)
    console.log("JEST Get")
    console.log(users)
    res.send(JSON.stringify(users))
})

app.post("/", function (req, res) {
    console.log("JEST POST")
    console.log(req.body)
    let odp = { bool: isAvaiable(req.body.login, req.body.password) }
    console.log(odp)
    res.send(JSON.stringify(odp))
})

app.post("/del", function (req, res) {
    if (users.find(user => user.id == req.body.id)) {
        users = users.filter(user => user.id != req.body.id)
        console.log(users)
    }

    res.send(JSON.stringify(users))
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
    console.log(JSON.stringify(users))
})
