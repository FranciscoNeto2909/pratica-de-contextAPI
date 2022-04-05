import { useContext } from "react"
import {Context} from "../context/Context"

export default function Home() {
    const {state, dispatch} = useContext(Context)
    return(
        <>
        <h1>Home</h1>
        <h2>Seja bem-vindo {state.name}</h2>

        <h2>Esta é a pagina inicial</h2>
        </>
    )
}