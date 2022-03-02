import styles from "../../../styles/IDPages.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const PokemonISR = ({ pokemon }) => {
  const router = useRouter();
  return (
    <>
      <h1 className={styles.title}>Pokémon: </h1>
      {router.isFallback ? (
        <h2>Loading</h2>
      ) : (
        <>
          <h2 className={styles.pseudoTitle}>
            {pokemon.forms[0].name.toUpperCase()}
          </h2>
          <div className={styles.pokemonImageContainer}>
            <Image
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.forms.name}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <ul className={styles.pokemonStats}>
            <li className={styles.pokeStat}>Id: #0{pokemon.id}</li>
            <li className={styles.pokeStat}>Weight: {pokemon.weight}lbs.</li>

            {pokemon.types[1] ? (
              <li className={styles.pokeStat}>
                Types: {pokemon.types[0].type.name} /{" "}
                {pokemon.types[1].type.name}
              </li>
            ) : (
              <li className={styles.pokeStat}>
                Type: {pokemon.types[0].type.name}
              </li>
            )}
          </ul>
        </>
      )}
    </>
  );
};
export default PokemonISR;

export const getStaticPaths = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_OUR_POKE_API);
  const pokemons = await response.json();
  const paths = pokemons.map((pokemon) => ({
    params: { id: `${pokemon.id}` },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_OUR_POKE_API}${params.id}`
  );
  const pokemon = await response.json();

  return {
    props: {
      pokemon,
    },
    revalidate: 20,
  };
};
