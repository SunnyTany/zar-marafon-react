import PokemonCard from "../PokemonCard/PokemonCard.js";
import POKEMONS from "./pokemons.js";
import style from './style.module.css';

const PokemonCards = () => {
    return(
        <div className={style.flex}>
            {
                POKEMONS.map(item => <PokemonCard key={item.id} {...item} />)
            }
        </div>
    );
}

export default PokemonCards;