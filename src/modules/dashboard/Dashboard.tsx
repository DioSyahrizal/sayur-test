import React, { FC } from "react";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router";

import { Badge, GridLayout, Loading, SectionBox } from "../../components";
import GET_FILMS from "../../hooks/query/useFilms";
import { Box } from "../../utils";
import { GetFilms } from "../../hooks/query/__generated__/GetFilms";

const Dashboard: FC = () => {
  const { data, loading } = useQuery<GetFilms>(GET_FILMS);
  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }

  return (
    <Box px={["25px", "100px"]}>
      <Box as="h1">Films</Box>
      <GridLayout>
        {data?.allFilms?.films?.map((film) => (
          <SectionBox
            key={film?.id}
            onClick={() => navigate(`film/${film?.id}`)}
          >
            <Box as="h2" my={0}>
              {film?.title}
            </Box>
            <Box my={10}>
              <Badge variant="red">Episode: {film?.episodeID}</Badge>
            </Box>
            <Box>Director: {film?.director}</Box>
            <Box my={10}>Release date: {film?.releaseDate}</Box>
            <Box as="ul" mt={20} p={0}>
              <Box fontWeight="bold" mb={10}>
                Producers:
              </Box>
              {film?.producers?.map((producer, idx) => (
                <Badge key={idx} variant="green" display="inline-block" mr={10}>
                  {producer}
                </Badge>
              ))}
            </Box>
          </SectionBox>
        ))}
      </GridLayout>
    </Box>
  );
};

export default Dashboard;
