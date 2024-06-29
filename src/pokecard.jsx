"use strict"

import "./pokecard.css"

/** PokeCard react object */

const PokeCard = ({name, image, types, exp}) => {
    return (<div className="PokeCard">
        <span className="PokeCard-name">{name}</span>
        <img src={image} />
        <div className="PokeCard-type">Type: {types.join("/")}</div>
        <span className="PokeCard-exp">EXP: {exp}</span>
    </div>)
}

export default PokeCard