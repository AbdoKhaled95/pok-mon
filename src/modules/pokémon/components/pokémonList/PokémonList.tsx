import type { PokemonResult } from "@modules/pokémon/models/pokémon.model";
import PokémonCard from "../pokémonCard/PokémonCard";
import "./PokémonList.scss";
type Props = {
  className?: string;
  data: PokemonResult[];
};

const PokémonList = ({ className, data }: Props) => {
  return (
    <div className={`pokémon_list ${className ?? ""}`}>
      {data?.map((item, index) => (
        <PokémonCard key={index} data={item} />
      ))}
    </div>
  );
};

export default PokémonList;
