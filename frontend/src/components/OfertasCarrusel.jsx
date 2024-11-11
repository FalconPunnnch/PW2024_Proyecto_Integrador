import { Carousel } from "react-bootstrap"
import { Link } from "react-router-dom"

const MainPage = () => {
    const ofertas = [
        { id: 1, src: "/images/oferta1.jpg", alt: "Oferta 1" },
        { id: 2, src: "/images/oferta2.jpg", alt: "Oferta 2" },
        { id: 3, src: "/images/oferta3.jpg", alt: "Oferta 3" },
    ]

    return (
        <>
            <Carousel>
                {ofertas.map((oferta) => (
                    <Carousel.Item key={oferta.id}>
                        <Link to="/construccion">
                            <img
                                className="d-block w-100"
                                src={oferta.src}
                                alt={oferta.alt}
                            />
                        </Link>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    )
}

export default MainPage
