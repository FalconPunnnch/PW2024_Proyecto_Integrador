import Header from "../components/Header"
import Footer from "../components/Footer"

const ConstruccPage = () => {
    return (
        <>
            <Header />
            <div style={{ 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 
                height: "80vh", 
                textAlign: "center"
            }}>
                <h1 style={{ fontSize: "2.5rem", color: "#333" }}>
                    Página en Construcción
                </h1>
            </div>
            <Footer />
        </>
    )
}

export default ConstruccPage