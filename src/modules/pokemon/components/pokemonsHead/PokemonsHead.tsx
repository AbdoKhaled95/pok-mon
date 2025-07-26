import { Button, Typography } from "@mui/material";
import "./PokemonsHead.scss";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@store/store";
import { setMode } from "@modules/pokemon/slices/pokemonSlice";
type Props = {
  className?: string;
};
const PokemonsHead = ({ className }: Props) => {
  const { mode } = useSelector((state: RootState) => state.pokemon);
  const dispatch = useDispatch();
  const actionsBtn = [
    {
      label: "Page Control",
      active: mode === 0,
    },
    {
      label: "Infinite Scroll",
      active: mode === 1,
    },
  ];
  const handleClick = (index: number) => dispatch(setMode(index));

  return (
    <div className={`pokemons_head ${className ?? ""}`}>
      <div className="pokemons_head-title">
        <Typography variant="h2">pokedex</Typography>
      </div>
      <Typography variant="body1" className="pokemons_head-description">
        Discover and explore Pokémon with {actionsBtn[mode].label}
      </Typography>
      <div className="pokemons_head-actions">
        {actionsBtn.map((action, index) => (
          <Button
            key={index}
            className={`pokemons_head-actions--btn ${
              action.active ? "active" : ""
            }`}
            onClick={() => handleClick(index)}
            variant={action.active ? "contained" : "outlined"}
            color="primary"
          >
            {action.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default PokemonsHead;
