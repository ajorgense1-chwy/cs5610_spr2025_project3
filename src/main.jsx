import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import TicTacToe from './TicTacToe.jsx'
import TicTacToeProvider from './TicTacToeProvider.jsx'
import CheckBoxes from './CheckBoxes.jsx'
import CheckApp from './CheckApp.jsx'
import CheckAppProvider from './CheckAppProvider.jsx'

//  return App()

    {/* <TicTacToeProvider>
      <TicTacToe />
    </TicTacToeProvider> */}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CheckAppProvider>
      <CheckApp />
    </CheckAppProvider>

  </StrictMode>,
)
