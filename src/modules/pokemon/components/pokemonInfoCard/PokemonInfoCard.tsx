import type { PokemonDetails } from "@modules/pokemon/models/pokemon.model";
import "./PokemonInfoCard.scss";
import {
  ElectricBoltOutline,
  StraightRuler,
  WeightLine,
} from "@assets/svgComponents/SvgIcons";
import { Chip, LinearProgress, Stack, Typography } from "@mui/material";
import { formattedThreeDigits } from "@utils/general.utils";

type Props = {
  className?: string;
  data: PokemonDetails;
};
const PokemonInfoCard = ({ className, data }: Props) => {
  return (
    <div className={`pokemon_info_card ${className ?? ""}`}>
      <div className="pokemon_info_card-head">
        <div className="pokemon_info_card-head--title">
          <ElectricBoltOutline />
          <Typography
            variant="h3"
            className="pokemon_info_card-head--title---text"
          >
            {data?.name}
          </Typography>
        </div>
        <Typography variant="body1" className="pokemon_info_card-head--number">
          #{formattedThreeDigits(data?.id)}
        </Typography>
      </div>
      <div className="pokemon_info_card-body">
        <div className="pokemon_info_card-body--section">
          <div className="pokemon_info_card-body--section---cover">
            <img
              className="pokemon_info_card-body--section---cover----img"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
              alt={`pokemon-${data.id} ${data.name}`}
            />
          </div>
          <Stack direction="row" spacing={1} justifyContent={"center"}>
            {data?.types?.map((item, index) => (
              <Chip
                key={index}
                label={item.type.name}
                color="error"
                variant="filled"
              />
            ))}
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            className="pokemon_info_card-body--section---info"
          >
            <div className="pokemon_info_card-body--section---info----block">
              <Typography
                variant="body1"
                className="pokemon_info_card-body--section---info----block-----label"
              >
                <StraightRuler /> Height
              </Typography>
              <Typography
                variant="body1"
                className="pokemon_info_card-body--section---info----block-----value"
              >
                {data?.height / 10} m
              </Typography>
            </div>
            <div className="pokemon_info_card-body--section---info----block">
              <Typography
                variant="body1"
                className="pokemon_info_card-body--section---info----block-----label"
              >
                <WeightLine /> Weight
              </Typography>
              <Typography
                variant="body1"
                className="pokemon_info_card-body--section---info----block-----value"
              >
                {data?.weight / 10} kg
              </Typography>
            </div>
          </Stack>
        </div>
        <div className="pokemon_info_card-body--section">
          <div className="pokemon_info_card-body--section---stats">
            <Typography
              variant="h5"
              className="pokemon_info_card-body--section---stats----title"
            >
              Base Stats
            </Typography>
            <div className="pokemon_info_card-body--section---stats----list">
              {data?.stats?.map((item, index) => (
                <div
                  key={index}
                  className="pokemon_info_card-body--section---stats----list-----item"
                >
                  <Typography
                    variant="body1"
                    className="pokemon_info_card-body--section---stats----list-----item------label"
                  >
                    {item.stat.name}
                  </Typography>
                  <div className="pokemon_info_card-body--section---stats----list-----item------value">
                    <LinearProgress
                      className="pokemon_info_card-body--section---stats----list-----item------value-------bar"
                      value={item.base_stat}
                      variant="determinate"
                    />
                    <Typography
                      variant="body1"
                      className="pokemon_info_card-body--section---stats----list-----item------value-------text"
                    >
                      {item.base_stat}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pokemon_info_card-body--section---abilities">
            <Typography
              variant="h5"
              className="pokemon_info_card-body--section---abilities----title"
            >
              Abilities
            </Typography>
            <div className="pokemon_info_card-body--section---abilities----list">
              {data?.abilities?.map((item, index) => (
                <Stack
                  key={index}
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  className="pokemon_info_card-body--section---abilities----list-----ability"
                >
                  <Chip
                    key={index}
                    label={item.ability.name}
                    sx={{ width: "fit-content", fontWeight: 700 }}
                  />
                  {item.is_hidden ? (
                    <Typography
                      variant="body1"
                      className="pokemon_info_card-body--section---abilities----list-----ability------hidden"
                    >{`(Hidden)`}</Typography>
                  ) : null}
                </Stack>
              ))}
            </div>
          </div>
          <div className="pokemon_info_card-body--section---experience">
            <Typography
              variant="h5"
              className="pokemon_info_card-body--section---experience----title"
            >
              Base Experience
            </Typography>
            <Typography
              variant="h4"
              component={"span"}
              className="pokemon_info_card-body--section---experience----value"
            >
              {data?.base_experience}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonInfoCard;
