import { useQuery } from "@apollo/client";
import React, { FC } from "react";
import GET_FILMS from "../../hooks/films/useFilms";
import { Box } from "../../utils";

const Dashboard: FC = () => {
  const { data, loading } = useQuery(GET_FILMS);

  console.log(data);

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <Box px={["25px", "100px"]}>
      <Box as="h1">Dashboard</Box>
      <Box
        display="grid"
        gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr", "1fr 1fr 1fr 1fr"]}
        gridGap={20}
      >
        {data?.allFilms.films.map((film: any) => (
          <Box key={film.id} border="1px solid black" borderRadius={15} p={20}>
            <Box as="h2" mt={0}>
              {film.title}
            </Box>
            <Box mb={10}>Director: {film.director}</Box>
            <Box mb={10}>Release date: {film.releaseDate}</Box>
            <Box>
              Producers:
              {film.producers.map((producer: any) => (
                <div>{producer}</div>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Dashboard;
