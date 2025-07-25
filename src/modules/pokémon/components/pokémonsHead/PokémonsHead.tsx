import { Button, Typography } from "@mui/material";
import "./PokémonsHead.scss";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@store/store";
import { setMode } from "@modules/pokémon/slices/pokémonSlice";
type Props = {
  className?: string;
};
const PokémonsHead = ({ className }: Props) => {
  const { mode } = useSelector((state: RootState) => state.Pokémon);
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
    <div className={`pokémons_head ${className ?? ""}`}>
      <div className="pokémons_head-title">
        <Typography variant="h2">pokédex</Typography>
      </div>
      <Typography variant="body1" className="pokémons_head-description">
        Discover and explore Pokémon with {actionsBtn[mode].label}
      </Typography>
      <div className="pokémons_head-actions">
        {actionsBtn.map((action, index) => (
          <Button
            key={index}
            className={`pokémons_head-actions--btn ${
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

export default PokémonsHead;
