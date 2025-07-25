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
        <PokémonCard key={index} id={item.id} />
      ))}
    </div>
  );
};

export default PokémonList;
