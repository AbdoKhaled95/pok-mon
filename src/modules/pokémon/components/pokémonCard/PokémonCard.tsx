import { Typography } from "@mui/material";
import "./PokémonCard.scss";
import type { PokemonResult } from "@modules/pokémon/models/pokémon.model";
import { useNavigate } from "react-router-dom";
import { ROUTES_PATH } from "@enums/routesPath.enum";
import { useDispatch } from "react-redux";
import { setPokémonId } from "@modules/pokémon/slices/pokémonSlice";
type Props = {
  className?: string;
  data: PokemonResult;
};
const PokémonCard = ({ className, data }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const match = data.url.match(/\/pokemon\/(\d+)\//);
  const number = match ? parseInt(match[1], 10) : 0;
  const formatted =
    number < 1000 ? number.toString().padStart(3, "0") : number.toString();

  const handleClick = () => {
    dispatch(setPokémonId(number));
    navigate(`/${ROUTES_PATH.POKEMON}/${number}`);
  };
  return (
    <div className={`pokémon_card ${className ?? ""}`} onClick={handleClick}>
      <div className="pokémon_card-cover">
        <img
          className="pokémon_card-cover--img"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`}
          alt={`pokémon-${number}`}
        />
      </div>
      <div className="pokémon_card-info">
        <Typography component={"h3"} className="pokémon_card-info--title">
          {data.name}
        </Typography>
        <Typography variant="body2" className="pokémon_card-info--number">
          #{formatted}
        </Typography>
      </div>
    </div>
  );
};

export default PokémonCard;
