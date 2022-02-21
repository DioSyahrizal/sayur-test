import React, { FC } from "react";
import { useNavigate } from "react-router";
import { useQuery } from "@apollo/client";

import { GridLayout, Loading, SectionBox } from "../../components";
import GET_PLANETS from "../../hooks/query/usePlanets";
import { Box } from "../../utils";
import { GetPlanets } from "../../hooks/query/__generated__/GetPlanets";

const Planets: FC = () => {
  const { data, loading } = useQuery<GetPlanets>(GET_PLANETS);
  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }

  return (
    <Box px={["25px", "100px"]} mb={30}>
      <Box as="h1">Planets</Box>
      <GridLayout>
        {data?.allPlanets?.planets?.map((planet) => (
          <SectionBox
            key={planet?.id}
            onClick={() => navigate(`/planet/${planet?.id}`)}
          >
            <Box as="h2" mt={0}>
              {planet?.name}
            </Box>
            <Box>Diameter: {planet?.diameter}</Box>
            <Box my={10}>Rotation Period: {planet?.rotationPeriod}</Box>
            <Box my={10}>Gravity: {planet?.gravity}</Box>
          </SectionBox>
        ))}
      </GridLayout>
    </Box>
  );
};

export default Planets;
