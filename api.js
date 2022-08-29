import express from 'express'
import cors from 'cors'

const server = express()
server.use(cors())
server.use(express.json())

const tweets = []
const userinfo = []
let icon

//POST 1

server.post('/sign-up', (req, res) => {
    const { username, avatar } = req.body
    userinfo.push({
        username,
        avatar
    });
    icon = avatar

    res.send('Send!')
});

//POST 2

server.post("/tweets", function (req, res) {
    const {username, tweet} = req.body
    const postmsg = {
      username,
      avatar: icon,
      tweet
    };
    tweets.push(postmsg)
    res.send('Send!')
});

//GET

server.get("/tweets", function (req, res) {
    const area = tweets.slice(-10)
    res.send(area)
});

server.listen(5000, function () {
    console.log("... 5000!")
});