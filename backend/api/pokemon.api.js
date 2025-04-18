import express from 'express';
import { deletePokemon, findPokemonById, findPokemonByOwner, findPokemonByType, getAllPokemon, insertPokemon } from './db/model/pokemon.model.js';

const router = express.Router();

let nextPokemonId = 4;

const myPokemon = {
    1: {
        name: 'Pikachu',
        health: 100,
        type: 'Electric'
    },
    2: {
        name: 'Blastoids',
        health: 150,
        type: 'Water'
    },
    3: {
        name: 'Charizard',
        health: 200,
        type: 'Fire'
    }
}



router.get('/', async function(req, res) {
    const owner = req.cookies.user

    if(!owner) {
        // if no owner cookie, redirect to login
    }

    const allPokemonResponse = await findPokemonByOwner(owner);

    res.json(allPokemonResponse)

});

router.get('/all', async function(req, res) {
    const allPokemonResponse = await getAllPokemon();

    res.json(allPokemonResponse)

});


// https://www.amazon.com/dp/B0CL5KNB9M/

// localhost:8000/api/pokemon/2

router.get('/:pokemonId', async function(request, response) {
    const pokemonId = request.params.pokemonId;

    const responsePokemon = await findPokemonById(pokemonId);

    if(!responsePokemon) {
        response.status(404);
        response.send('No pokemon with Pokemon ID ' + pokeId + ' exists');
        return;
    }


    response.json(responsePokemon)
})

router.post('/', async function(request, response) {
    const requestBody = request.body;

    if(!requestBody.type || !requestBody.health || !requestBody.name)  {
        response.status(400)
        response.send("Request invalid, please recheck");
        return;
    }

    if(!Number(requestBody.health)) {
        
    }

    const newPokemon = {
        type: requestBody.type,
        name: requestBody.name,
        health: requestBody.health
    }

    if(requestBody.creationDate) {
        newPokemon.creationDate = requestBody.creationDate
    }

    const newPokemonId = await insertPokemon(newPokemon)

    // const newId = nextPokemonId;
    // myPokemon[newId] = newPokemon;
    // nextPokemonId = nextPokemonId + 1;

    response.json({
        newPokemonId: newPokemonId
    });
})

router.delete('/:pokemonId', async function(request, response) {
    const pokemonToDelete = request.params.pokemonId;

    await deletePokemon(pokemonToDelete)

    response.send("Delete request received")
})


export default router;