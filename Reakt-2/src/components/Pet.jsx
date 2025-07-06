import React from "react";
import "./Pet.css";

function Pet({ name, type, age, breed, photoUrl }) {
    return (
        <div className="pet-card">
            <h2>{name}</h2>
            <p><b>Вид питомца:</b> {type}</p>
            <p><b>Порода:</b> {breed}</p>
            <p><b>Возраст:</b> {age} {age === 1 ? "год" : "лет"}</p>
            {photoUrl && (
                <img
                    src={photoUrl}
                    alt={`${name} - фото питомца`}
                    className="pet-photo"
                />
            )}
        </div>
    );
}

export default Pet;
