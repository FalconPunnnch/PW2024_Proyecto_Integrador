import React, { useState } from "react"
import { Link } from "react-router-dom"
import "../index.css"

const FlipCard = ({ imagen, titulo, descripcion, precio, infoExtra }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped)
    }

    return (
        <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
            <div className="flip-card-inner">

                <div className="flip-card-front" onClick={handleFlip}>
                    <img src={imagen} alt={titulo} className="card-image" />
                    <h3 className="card-title">
                        <Link to="/ProductoPage">{titulo}</Link>
                    </h3>
                    <p className="card-description">{descripcion}</p>
                    <div className="card-price">S/. {precio}</div>
                </div>

                <div className="flip-card-back" onClick={handleFlip}>
                    <p className="extra-info">{infoExtra}</p>
                </div>
            </div>
        </div>
    )
}

export default FlipCard
