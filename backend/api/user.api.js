import express from 'express';
const router = express.Router();

const usersDB = {
    1: {
        username: 'hunter',
        password: 'passwordhunter',
        age: 37
    },
    2: {
        username: 'josh',
        password: 'passwordjosh',
        age: 20
    }
}

router.post('/login', function(req, res) {

    const requestBody = req.body;
    const password = requestBody.password;
    const username = requestBody.username;

    console.log("userdata", username, password)

    if(!password || !username) {
        res.status(401);
        res.send("User did not provide a username and/or password")
        return;
    }

    let userdata;
    for(let i = 0; i < Object.values(usersDB).length; i++) {
        const curUserData = Object.values(usersDB)[i]
        if(curUserData.username === username) {
            userdata = curUserData
        }
    }

    if(!userdata) {
        res.status(400);
        res.send("User data not found for username: " + username)
        return;
    }

    if(password !== userdata.password) {
        res.status(401);
        res.send("Username/password pair not valid")
        return;
    }

    res.cookie("user", username);

    res.status(200);
    res.send("Successfully logged in");
})


router.get('/', function(req, res) {

    const minimumAge = Number(req.query.minAge);

    if(minimumAge) {
        const minAgeUsers = Object.values(usersDB)
            .filter(function(user) {
                return user.age >= minimumAge;
            })
        res.json(minAgeUsers);
        return;

    }

    res.json(usersDB);

})

/*
    /api/user/{user_id}
    /api/user/1

    user_id === 1

    request.params = {
        user_id: 1
    }

*/
router.get('/:userId', function(request, response) {

    const userId = request.params.userId;

    const foundUser = usersDB[userId]

    if(!foundUser) {
        response.status(404);
        response.send('Cannot find matching user');
        return;
    }

    response.json(foundUser)

})

router.post('/', function(request, response) {

    const body = request.body;

    const username = body.username;
    const password = body.password;

    if(!username || !password) {
        response.status(400);
        response.send(`Missing either username (${username}) or password (${passsword})`)
        return;
    }

    const newUserId = Object.keys(usersDB).length + 1

    const randomAge = Math.ceil(Math.random() * 100);

    usersDB[newUserId] = {
        username: username,
        password: password,
        age: randomAge,
    }

    response.json({
        message: 'New user created',
        userId: newUserId,
    })


})

export default router;