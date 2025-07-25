import PokémonList from "../pokémonList/PokémonList";
import "./PokémonPagination.scss";
type Props = {
  className?: string;
};
const PokémonPagination = ({ className }: Props) => {
  return (
    <div className={`pokémon_pagination ${className ?? ""}`}>
      <PokémonList data={[1, 2, 3, 4, 5, 6]} />
    </div>
  );
};

export default PokémonPagination;
