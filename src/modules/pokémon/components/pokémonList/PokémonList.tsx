import PokémonCard from "../pokémonCard/PokémonCard";
import "./PokémonList.scss";
type Props = {
  className?: string;
  data: any[];
};

const PokémonList = ({ className, data }: Props) => {
  return (
    <div className={`pokémon_list ${className ?? ""}`}>
      {data.map((item, index) => (
        <PokémonCard
          key={index}
          url={"https://pokeapi.co/api/v2/pokemon/10001/"}
        />
      ))}
    </div>
  );
};

export default PokémonList;
