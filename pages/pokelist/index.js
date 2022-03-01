import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../../styles/PokemonPages.module.css";

const PokeList = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(process.env.NEXT_PUBLIC_POKE_PUBLIC_API);
      const smallPokemonList = await response.json();

      const pokemonsAllpromise = Promise.all(
        smallPokemonList.results.map((pokemon) =>
          fetch(pokemon.url).then((response) => response.json())
        )
      );
      const bigPokemonList = await pokemonsAllpromise;

      setPokemonList(bigPokemonList);
    })();
  }, []);

  return (
    <>
      <h1 className={styles.title}>Pokémon List</h1>
      <ul className={styles.pokemonList}>
        {pokemonList &&
          pokemonList.map((pokemon) => (
            <li key={pokemon.id} className={styles.pokemonListItem}>
              <div className={styles.pokemonImageContainer}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.forms.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className={styles.pokemonText}>
                {pokemon.forms[0].name.toUpperCase()}
              </p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default PokeList;
