import PokémonList from "../pokémonList/PokémonList";
import "./PokémonLoadMore.scss";
type Props = {
  className?: string;
};
const PokémonLoadMore = ({ className }: Props) => {
  return (
    <div className={`pokémon_load_more ${className ?? ""}`}>
      <PokémonList data={[1, 2, 3, 4, 5, 6]} />
    </div>
  );
};

export default PokémonLoadMore;
