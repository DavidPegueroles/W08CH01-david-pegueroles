import styles from "../../../styles/PokemonPages.module.css";
import Image from "next/image";
import router from "next/router";

const PokemonSSG = ({ pokemonList }) => {
  const goToDetailsPage = (id) => {
    console.log(id);
    router.push(`/mypokemon/${id}`);
  };

  return (
    <>
      <h1 className={styles.title}>Pokémon List SSG</h1>
      <ul className={styles.pokemonList}>
        {pokemonList.map((pokemon) => (
          <li
            key={pokemon.id}
            className={styles.pokemonListItemClickable}
            onClick={() => {
              goToDetailsPage(pokemon.id);
            }}
          >
            <div className={styles.pokemonImageContainer}>
              <Image
                src={pokemon.sprites.other["official-artwork"].front_default}
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

export const getStaticProps = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_OUR_POKE_API);
  const pokemonList = await response.json();

  return {
    props: {
      pokemonList,
    },
  };
};

export default PokemonSSG;
