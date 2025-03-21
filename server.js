import express from 'express';
import randomNumberGenerator from './backend/utils.js';
import pokemonAPI from './backend/api/pokemon.api.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/pokemon', pokemonAPI)

app.get('/', function(request, response) {
    response.send('This is the second GET request with the same URL')

})

app.get('/', function(request, response) {
    response.send(`Hello web dev from the backend!
        Here's a random number: ${randomNumberGenerator()}
        `)
})



app.get('/someUrlStuff', function(request, response) {
    response.send("Here's some random URL nonsense aIO&)(&)(&@$#%^&*")
})

app.post('/', function(request, response) {
    response.send("My first POST ruquest");
})

app.listen(8000, function () {
    console.log('Starting server...');
})