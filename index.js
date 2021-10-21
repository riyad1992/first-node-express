const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json())
const port = 5000;



app.get('/', (req, res) => {
    res.send('wow, I am learnig node js')
})

const users = [
    { id: 0, name: 'Shabana', email: 'Shabana@gmail.com', phone: '01788888888' },
    { id: 1, name: 'Shabnoor', email: 'Shabnoor@gmail.com', phone: '01788888888' },
    { id: 2, name: 'Shrabonti', email: 'Shrabonti@gmail.com', phone: '01788888888' },
    { id: 3, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '01788888888' },
    { id: 4, name: 'Soniya', email: 'Soniya@gmail.com', phone: '01788888888' },
    { id: 5, name: 'Susmita', email: 'Susmita@gmail.com', phone: '01788888888' },
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user=> user.name.toLowerCase().includes(search))
        res.send(searchResult)
    }else{
        res.send(users)
    }
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.post('/users', (req, res) => {
    const newUser = req.body
    newUser.id = users.length
    console.log('giting the post', req.body)
    res.json(newUser)
})

app.listen(port, () =>{
    console.log('listening to from', port)
})