import { useState } from "react"
import EntradaDatos from "./EntradaDatos"

const LoginFormulario = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    return (
        <>
            <h1>{props.modo === "login" ? "Login" : "Registro Usuario"}</h1>
            <form>
                <EntradaDatos
                    key={"input_username"}
                    label="Usuario:"
                    tipo="entrada"
                    valor={username}
                    setValor={setUsername}
                />
                <EntradaDatos
                    key={"input_password"}
                    label="Password:"
                    tipo="password"
                    valor={password}
                    setValor={setPassword}
                />
                {props.modo === "registro" && (
                    <EntradaDatos
                        key={"input_email"}
                        label="Email:"
                        tipo="entrada"
                        valor={email}
                        setValor={setEmail}
                    />
                )}
                <div>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => {
                            props.loginOnClick(username, password, email)
                        }}
                    >
                        {props.modo === "login" ? "Login" : "Guardar"}
                    </button>
                </div>
            </form>
        </>
    )
}

export default LoginFormulario