const express = require('express');
const routes = express.Router()
const views = __dirname + "/views/"

const profile = {

    name: 'Renato Sousa',
    avatar: "https://avatars.githubusercontent.com/u/94645489?v=4",
    hourValue: 70.00.toFixed(2),
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 6

}

routes.get('/', (req, res) => res.render(views + "index"))
routes.get('/job', (req, res) => res.render(views + "job"))
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile", {profile} ))

module.exports = routes;