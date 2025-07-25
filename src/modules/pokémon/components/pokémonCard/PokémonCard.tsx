import { Typography } from "@mui/material";
import "./PokémonCard.scss";
type Props = {
  className?: string;
  id: number;
};
const PokémonCard = ({ className, id }: Props) => {
  return (
    <div className={`pokémon_card ${className ?? ""}`}>
      <div className="pokémon_card-cover">
        <img
          className="pokémon_card-cover--img"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${1}.svg`}
          alt={`pokémon ${1}`}
        />
      </div>
      <div className="pokémon_card-info">
        <Typography component={"h3"} className="pokémon_card-info--title">
          pokémon
        </Typography>
        <Typography variant="body2" className="pokémon_card-info--number">
          #number
        </Typography>
      </div>
    </div>
  );
};

export default PokémonCard;
