import express from 'express';
const router = express.Router();

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


router.get('/', function(req, res) {
  
    /*
        {
            type: 'Fire',
            health: '100'
        }
    */
    const pokemonType = req.query.type;

    if(pokemonType) {
        const matchingPokemon = [];
        const pokemonList = Object.values(myPokemon);

        for(let i = 0; i < pokemonList.length; i++) {
            const pokemon = pokemonList[i];
            if(pokemonType === pokemon.type) {
                matchingPokemon.push(pokemon)
            }

        }
        res.json(matchingPokemon);
        return;  
    }

    res.json(myPokemon)

});


// https://www.amazon.com/dp/B0CL5KNB9M/

// localhost:8000/api/pokemon/2

router.get('/:pokemonId', function(request, response) {
    const pokeId = request.params.pokemonId;

    const responsePokemon = myPokemon[pokeId];

    if(!responsePokemon) {
        response.status(404);
        response.send('No pokemon with Pokemon ID ' + pokeId + ' exists');
        return;
    }

    response.json(responsePokemon)

})

router.post('/', function(request, response) {
    const requestBody = request.body;

    if(!requestBody.type || !requestBody.health || !requestBody.name)  {
        response.status(400)
        response.send("Request invalid, please recheck");
        return;
    }

    const newPokemon = {
        type: requestBody.type,
        name: requestBody.name,
        health: requestBody.health,
    }

    const newId = Object.values(myPokemon).length + 1;
    myPokemon[newId] = newPokemon;

    response.json({
        newPokemonId: newId
    });
})


router.get('/about', function(req, res) {
  res.send('Food is the best');
});

export default router;