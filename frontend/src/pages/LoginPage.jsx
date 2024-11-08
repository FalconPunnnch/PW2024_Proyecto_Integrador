import { useState } from "react"
import LoginFormulario from "../components/LoginFormulario"
import Header from "../components/Header"
import Footer from "../components/Footer"

const LoginPage = () => {
    const [error, setError] = useState("")

    const iniciarSesionHandler = (username, password) => {
        // Simulación de autenticación básica
        const usuarioRegistrado = JSON.parse(sessionStorage.getItem("USUARIO"))
        
        if (usuarioRegistrado && 
            usuarioRegistrado.usuario === username && 
            usuarioRegistrado.password === password) {
            alert("Inicio de sesión exitoso")
        } else {
            setError("Usuario o contraseña incorrectos")
        }
    }

    return (
        <>
            <Header />
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <LoginFormulario 
                        loginOnClick={iniciarSesionHandler} 
                        modo={"login"} 
                    />
                    {error && (
                        <div className="mt-4 alert alert-danger">{error}</div>
                    )}
                </div>
                <div className="col-md-4"></div>
            </div>
            <Footer />
        </>
    )
}

export default LoginPage
