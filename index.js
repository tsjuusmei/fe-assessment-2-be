const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

let userID = "5e6ba1bde4b2e66c746a4df7";

const users = [
    {
        id: "5e6a2a4f05bc310f94b75ba8",
        name: "Sophie",
        age: 22,
        likedBy: ["5e6ba1bde4b2e66c746a4df7"],
        visitedBy: [""]
    },
    {
        id: "5e6ba1bde4b2e66c746a4df7",
        name: "Guus",
        age: 21,
        likedBy: ["5e6a2a4f05bc310f94b75ba8", "5e6ed3ed1c9d440000983905"],
        visitedBy: ["5e6a2a4f05bc310f94b75ba8", "5e6ed3ed1c9d440000983905", "5e6ed3d91c9d440000983904", "5e6ed43e1c9d440000983906"]
    },
    {
        id: "5e6ed3d91c9d440000983904",
        name: "Lindy",
        age: 20,
        likedBy: [""],
        visitedBy: [""]
    },
    {
        id: "5e6ed3ed1c9d440000983905",
        name: "Layla",
        age: 21,
        likedBy: [""],
        visitedBy: [""]
    },
    {
        id: "5e6ed43e1c9d440000983906",
        name: "Sara",
        age: 19,
        likedBy: [""],
        visitedBy: [""]
    }
]

app.get('/users', (req, res) => {
    res.json(users)
})

app.get('/userID', (req, res) => {
    res.json(userID)
})

app.post('/login', (req, res) => {
    userID = req.body.user;
    res.redirect('https://tsjuusmei.github.io/fe-assessment-2/html-css-js/profile.html')
})

app.post('/logout', (req, res) => {
    res.status(301).redirect("https://tsjuusmei.github.io/fe-assessment-2/html-css-js/login.html");
});

app.post("/like", (req, res) => {

    console.log(JSON.stringify(user.id), JSON.stringify(req.body.id))

    const likedUser = users.filter(user => { return JSON.stringify(user.id) == JSON.stringify(req.body.id) })[0];

    console.log(likedUser);

    const currentUser = users.filter(data => { return data.id == userID })[0];

    if (likedUser.likedBy.includes(currentUser.id)) {
        const index = likedUser.likedBy.indexOf(currentUser.id);
        likedUser.likedBy.splice(index, 1);
        res.sendStatus(201);
    } else {
        likedUser.likedBy.push(currentUser.id)
        res.sendStatus(200);
    }
});

app.listen(process.env.PORT || 3000)

module.exports = express.Router()