import React, { FC } from "react";
import { useParams } from "react-router";
import { useQuery } from "@apollo/client";

import { Badge, Loading } from "../../components";
import GET_PLANET from "../../hooks/query/usePlanet";
import { Box } from "../../utils";
import { GetPlanet } from "../../hooks/query/__generated__/GetPlanet";

const Planet: FC = () => {
  const { id } = useParams();
  const { data, loading } = useQuery<GetPlanet>(GET_PLANET, {
    variables: { id },
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <Box px={["25px", "100px"]}>
      <Box as="h1">{data?.planet?.name}</Box>
      <Box my={10}>
        <b>Diameter:</b> {data?.planet?.diameter}
      </Box>
      <Box my={10}>
        <b>Rotation Period:</b> {data?.planet?.rotationPeriod}
      </Box>
      <Box my={10}>
        <b>Orbital Period:</b> {data?.planet?.orbitalPeriod}
      </Box>
      <Box my={10}>
        <b>Gravity:</b> {data?.planet?.gravity}
      </Box>
      <Box my={10}>
        <b>Population:</b> {data?.planet?.population}
      </Box>
      <Box my={10}>
        <Box fontWeight="bold" mb={10}>
          Climates:
        </Box>
        {data?.planet?.climates?.map((climate: any) => (
          <Badge key={climate} variant="green" display="inline-block" mr={10}>
            {climate}
          </Badge>
        ))}
      </Box>
      <Box my={10}>
        <Box fontWeight="bold" mb={10}>
          Terrains:
        </Box>
        {data?.planet?.terrains?.map((terrain: any) => (
          <Badge key={terrain} variant="red" display="inline-block" mr={10}>
            {terrain}
          </Badge>
        ))}
      </Box>
      <Box my={10}>
        <Box fontWeight="bold" mb={10}>
          Film Connection:
        </Box>
        {data?.planet?.filmConnection?.films?.map((film: any) => (
          <Badge key={film?.id} variant="yellow" display="inline-block" mr={10}>
            {`Episode ${film?.episodeID}: ${film?.title}`}
          </Badge>
        ))}
      </Box>
    </Box>
  );
};

export default Planet;
