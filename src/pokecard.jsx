"use strict"

/** PokeCard react object */

const PokeCard = ({name, image, types, exp}) => {
    return (<div classname="PokeCard">
        <span classname="PokeCard-name">{name}</span>
        <img src={image} />
        <span classname="PokeCard-type">Type: {types.join("/")}</span>
        <span classname="PokeCard-exp">EXP: {exp}</span>
    </div>)
}

export default PokeCard