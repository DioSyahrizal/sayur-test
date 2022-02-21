import React, { FC } from "react";
import { useQuery } from "@apollo/client";

import { GridLayout, Loading, SectionBox } from "../../components";
import GET_PEOPLES from "../../hooks/query/usePeoples";
import { Box } from "../../utils";
import { useNavigate } from "react-router";
import { GetPeoples } from "../../hooks/query/__generated__/GetPeoples";

const Peoples: FC = () => {
  const { data, loading } = useQuery<GetPeoples>(GET_PEOPLES);
  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }

  return (
    <Box px={["25px", "100px"]} mb={30}>
      <Box as="h1">Peoples</Box>
      <GridLayout>
        {data?.allPeople?.people?.map((people) => (
          <SectionBox
            key={people?.id}
            onClick={() => navigate(`/people/${people?.id}`)}
          >
            <Box as="h2" mt={0} mb={20}>
              {people?.name}
            </Box>
            <Box my="5px">Birth Year: {people?.birthYear}</Box>
            <Box my="5px">Gender: {people?.gender}</Box>
            <Box my="5px">Eye Color: {people?.eyeColor}</Box>
          </SectionBox>
        ))}
      </GridLayout>
    </Box>
  );
};

export default Peoples;
