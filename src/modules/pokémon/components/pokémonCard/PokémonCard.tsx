import "./PokémonCard.scss";
type Props = {
  className?: string;
  id: number;
};
const PokémonCard = ({ className, id }: Props) => {
  return <div className={`pokémon_card ${className ?? ""}`}>pokémon_card</div>;
};

export default PokémonCard;
