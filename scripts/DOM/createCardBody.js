import { createTypeBadge } from "./createTypeBadge.js";

export const createCardBody = (pokemonName, pokemonTypes) => {
    const header = document.createElement("h2");
    pokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
    header.textContent = pokemonName;

    const button = document.createElement("button");
    button.textContent = "See more...";

    const typeBadges = document.createElement("div");
    typeBadges.classList.add("type-badges");
    pokemonTypes.forEach((pokemonType) => {
        if(pokemonType === undefined) {
            return;
        }

        const typeBadge = createTypeBadge(pokemonType);
        typeBadges.appendChild(typeBadge);
    })

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.appendChild(header);
    cardBody.append(typeBadges);
    cardBody.appendChild(button);

    return cardBody;
}