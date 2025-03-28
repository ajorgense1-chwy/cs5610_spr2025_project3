import axios from "axios";
import { useEffect, useState } from "react"

export default function AllPokemon() {

    const [pokemonState, setPokemonState] = useState(null);
    const [newPokemonNameState, setPokemonNameState] = useState('');
    const [newPokemonTypeState, setPokemonTyeState] = useState('');
    const [newPokemonHealthState, setPokemonHealthState] = useState(0);

    async function retrieveAllPokemon() {
        const response = await axios.get('/api/pokemon');
        const pokemon = response.data;
        setPokemonState(pokemon);
    }

    useEffect(function() {
        retrieveAllPokemon();
    }, [])


    if(!pokemonState) {
        return <div>
            Loading pokemon...
        </div>
    }

    const pokemonComponent = [];
    
    const pokemonKeys = Object.keys(pokemonState)

    for(let i = 0; i <pokemonKeys.length; i++) {
        const key = pokemonKeys[i]
        const currentPokemon = pokemonState[key]

        const newComponent = (<div>
                {currentPokemon.name} - Health: {currentPokemon.health} - Type: {currentPokemon.type} - <button onClick={() => deletePokemon(key)}>Delete Me</button>
            </div>)
        
        pokemonComponent.push(newComponent)
    }

    async function deletePokemon(id) {
        await axios.delete('/api/pokemon/' + id)

        await retrieveAllPokemon();


    }

    function updateNewPokemonHealth(event) {
        setPokemonHealthState(event.target.value)
    }

    function updateNewPokemonType(event) {
        setPokemonTyeState(event.target.value)
    }

    function updateNewPokemonName(event) {
        setPokemonNameState(event.target.value)
    }

    async function submitNewPokemon() {
        const request = {
            name: newPokemonNameState,
            health: newPokemonHealthState,
            type: newPokemonTypeState
        }

        const response = await axios.post('/api/pokemon', request)

        await retrieveAllPokemon();
    }   


    return (
        <div>
            Hello from the AllPokemon page

            {pokemonComponent}

            <div>
                <h3>New Pokemon:</h3>
                <div>
                    Name:
                    <input onChange={(event) => updateNewPokemonName(event)} />
                </div>
                <div>
                    Type:
                    <input onChange={(event) => updateNewPokemonType(event)} />
                </div>
                <div>
                    Health:
                    <input onChange={(event) => updateNewPokemonHealth(event)} type='number'/>
                </div>
                <div>
                    <button onClick={() => submitNewPokemon()}>Create new Pokemon</button>
                </div>


            </div>
        </div>
    )
}