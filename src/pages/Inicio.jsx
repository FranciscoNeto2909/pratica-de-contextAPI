import { useContext } from "react"
import {Context} from "../context/Context"

export default function Home() {
    const {state, dispatch} = useContext(Context)
    return(
        <>
        <h1>Home</h1>
        <h2>User:{state.name}</h2>
        </>
    )
}