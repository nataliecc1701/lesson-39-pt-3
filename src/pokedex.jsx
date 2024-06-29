import PokeCard from './pokecard.jsx';

const imgBaseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";
const imgExtension = "png"

const PokeDex = ({pokemon = [
    {id: 4, name: 'Charmander', types: ['fire'], base_experience: 62},
    {id: 7, name: 'Squirtle', types: ['water'], base_experience: 63},
    {id: 11, name: 'Metapod', types: ['bug'], base_experience: 72},
    {id: 12, name: 'Butterfree', types: ['bug','flying'], base_experience: 178},
    {id: 25, name: 'Pikachu', types: ['electric'], base_experience: 112},
    {id: 39, name: 'Jigglypuff', types: ['normal'], base_experience: 95},
    {id: 94, name: 'Gengar', types: ['ghost','poison'], base_experience: 225},
    {id: 133, name: 'Eevee', types: ['normal'], base_experience: 65}
  ]}) => {
    return (<div>
        <h2>Pokedex:</h2>
        {pokemon.map((p) => {
            return (<PokeCard name={p.name} types={p.types}
            image={`${imgBaseURL}/${p.id}.${imgExtension}`}
            exp={p.base_experience} key={p.id}/>)})}
    </div>)
}

export default PokeDex;