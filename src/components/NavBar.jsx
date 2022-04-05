import { useContext } from "react"
import { Link } from "react-router-dom"

import { Context } from "../context/Context"
import "./navBar.css"

export default function Navbar() {
    const {state} = useContext(Context)
    return(
        <nav>
            <img src="" alt="" />
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/page1">Pagina 1</Link></li>
                <li><Link to="/about">Sobre</Link></li>
            </ul>
            <div className="login">
                <img src="https://th.bing.com/th/id/R.2faa4e28713dc962310e9f0047ff18e3?rik=n1VDrWI%2bk2QduA&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_311846.png&ehk=8BNi6npflzhZPGZub6urwGF3PWz3kxhXvxZ1RRw7XHQ%3d&risl=&pid=ImgRaw&r=0" alt="login" />
                    <Link to="/login">{state.loged ? "Logout" : "Login"}</Link>
            </div>
        </nav>
    )
}