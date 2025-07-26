import type { PokemonInfo } from "@modules/pokemon/models/pokemon.model";
import PokemonCard from "../pokemonCard/PokemonCard";
import "./PokemonList.scss";
type Props = {
  className?: string;
  data: PokemonInfo[];
};

const PokemonList = ({ className, data }: Props) => {
  return (
    <div className={`pokemon_list ${className ?? ""}`}>
      {data?.map((item, index) => (
        <PokemonCard key={index} data={item} />
      ))}
    </div>
  );
};

export default PokemonList;
