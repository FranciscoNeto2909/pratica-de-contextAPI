import { useState,useContext } from "react"
import { Types } from "../actionTypes/Types"

import { Context } from "../context/Context"
import "./pages.css"

export default function Login() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const {state, dispatch} = useContext(Context)

    function handleSetName(e) {
        setName(e.target.value)
    }
    function handleSetEmail(e) {
        setEmail(e.target.value)
    }
    function handleSetPass(e) {
        setPass(e.target.value)
    }
    function handleLogin(e) {
        e.preventDefault()
        dispatch({type:Types.LOGIN})
        dispatch({
            type:Types.CHANGE_NAME,
            payload:{
                name
            }
        })
    }

    return(
        <div className="container">
            <div>
                <h2>Login</h2>
                <form>
                    <label htmlFor="name" >Nome</label>
                    <input type="text" id="name" value={name}
                    onChange={handleSetName} autoComplete="none"/>

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email}
                    onChange={handleSetEmail} autoComplete="none"/>

                    <label htmlFor="pass">Senha</label>
                    <input type="password" id="pass" value={pass}
                    onChange={handleSetPass}/>

                    <button onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    )
}