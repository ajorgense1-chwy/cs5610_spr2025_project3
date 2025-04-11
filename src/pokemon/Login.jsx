import axios from "axios";
import { useState } from "react";

export default function Login() {


    const [loginUsernameState, setLoginUsernameState] = useState('');
    const [loginPasswordState, setLoginPasswordState] = useState('');
    const [newPokemonHealthState, setPokemonHealthState] = useState(0);



    function updatedUsername(event) {
        setLoginUsernameState(event.target.value)
    }

    function updatePassword(event) {
        setLoginPasswordState(event.target.value)
    }

    async function submitLogin() {
        const request = {
            username: loginUsernameState,
            password: loginPasswordState
        }

        const response = await axios.post('/api/user/login', request)
        console.log(response)
    }   

    return (
        <div>
            Login Page
            <div>
                <h3>Login Here:</h3>
                <div>
                    Username:
                    <input onChange={(event) => updatedUsername(event)} />
                </div>
                <div>
                    Passowrd:
                    <input onChange={(event) => updatePassword(event)} />
                </div>
                <div>
                    <button onClick={() => submitLogin()}>Login</button>
                </div>


            </div>
        </div>
    )
}