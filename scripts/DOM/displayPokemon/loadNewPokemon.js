import { getLastPokemonId } from "../../utils/getLastPokemonIndex.js";
import { displayHomePagePokemon } from "./displayHomePagePokemon.js";
import { handlePokemonVisibility } from "../../utils/handlePokemonVisibility.js";

// const pokemonVisibilityObserver = new IntersectionObserver(handlePokemonVisibility);
export const loadNewPokemon = async (seeMorePokemonElement) => {
    const isIntersecting = seeMorePokemonElement[0].isIntersecting;

    if(isIntersecting) { 
        const lastPokemonId = getLastPokemonId();
        await displayHomePagePokemon(lastPokemonId);
    }

    // let pokemonCards = document.querySelectorAll(".card-container");
    //     pokemonCards.forEach(pokemonCard =>
    //         pokemonVisibilityObserver.observe(pokemonCard)
    // );
}