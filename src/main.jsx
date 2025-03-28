import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AllPokemon from './pokemon/AllPokemon'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AllPokemon />

  </StrictMode>,
)
