import "./pages.css"

export default function Login() {
    return(
        <div className="container">
            <form>
                <label htmlFor="name" id="name">Nome</label>
                <input type="text" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
                <label htmlFor="pass">Senha</label>
                <input type="password" id="pass" />
                <button>Login</button>
            </form>
        </div>
    )
}