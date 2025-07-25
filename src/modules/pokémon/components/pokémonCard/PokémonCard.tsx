import { Typography } from "@mui/material";
import "./PokémonCard.scss";
type Props = {
  className?: string;
  url: string;
};
const PokémonCard = ({ className, url }: Props) => {
  const match = url.match(/\/pokemon\/(\d+)\//);
  const number = match ? parseInt(match[1], 10) : null;
  return (
    <div className={`pokémon_card ${className ?? ""}`}>
      <div className="pokémon_card-cover">
        <img
          className="pokémon_card-cover--img"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`}
          alt={`pokémon ${number}`}
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
