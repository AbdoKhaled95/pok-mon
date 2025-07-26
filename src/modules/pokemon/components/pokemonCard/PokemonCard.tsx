import { Typography } from "@mui/material";
import "./PokemonCard.scss";
import type { PokemonInfo } from "@modules/pokemon/models/pokemon.model";
import { useNavigate } from "react-router-dom";
import { ROUTES_PATH } from "@enums/routesPath.enum";
import { useDispatch } from "react-redux";
import { setPokemonId } from "@modules/pokemon/slices/pokemonSlice";
import { formattedThreeDigits } from "@utils/general.utils";
type Props = {
  className?: string;
  data: PokemonInfo;
};
const PokemonCard = ({ className, data }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const match = data.url.match(/\/pokemon\/(\d+)\//);
  const number = match ? parseInt(match[1], 10) : 0;

  const handleClick = () => {
    dispatch(setPokemonId(number));
    navigate(`/${ROUTES_PATH.POKEMON}/${number}`);
  };
  return (
    <div className={`pokemon_card ${className ?? ""}`} onClick={handleClick}>
      <div className="pokemon_card-cover">
        <img
          className="pokemon_card-cover--img"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`}
          alt={`pokemon-${number} ${data.name}`}
        />
      </div>
      <div className="pokemon_card-info">
        <Typography component={"h3"} className="pokemon_card-info--title">
          {data.name}
        </Typography>
        <Typography variant="body2" className="pokemon_card-info--number">
          #{formattedThreeDigits(number)}
        </Typography>
      </div>
    </div>
  );
};

export default PokemonCard;
