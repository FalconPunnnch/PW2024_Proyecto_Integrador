import Header from "../components/Header"
import Footer from "../components/Footer"
import OfertasCarrusel from "../components/OfertasCarrusel"
import FlipCard from "../components/FlipCard"

const MainPage = () => {
    const productos = [
        {
            imagen: "/images/product1.jpg",
            titulo: "Producto 1",
            descripcion: "Breve descripción del producto 1",
            precio: 29.90,
            infoExtra: "Información adicional del producto 1"
        },
        {
            imagen: "/images/product2.jpg",
            titulo: "Producto 2",
            descripcion: "Breve descripción del producto 2",
            precio: 39.99,
            infoExtra: "Información adicional del producto 2"
        },
        // Se pueden añadir más productos de ser necesario
    ]
    
    return (
        <>
            <Header />
            <OfertasCarrusel />
            <div className="product-grid">
                {productos.map((producto, index) => (
                    <FlipCard key={index} {...producto} />
                ))}
            </div>
            <Footer />
        </>
    )
}

export default MainPage
