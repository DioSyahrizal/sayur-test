import React, { FC } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router";

import { Badge, Loading } from "../../components";
import GET_FILM from "../../hooks/query/useFilm";
import { Box } from "../../utils";
import { GetFilm } from "../../hooks/query/__generated__/GetFilm";

const Film: FC = () => {
  const { id } = useParams();
  const { data, loading } = useQuery<GetFilm>(GET_FILM, { variables: { id } });

  if (loading) {
    return <Loading />;
  }

  return (
    <Box px={["25px", "100px"]}>
      <Box as="h1">{data?.film?.title}</Box>
      <Box as="h3">Description:</Box>
      <Box as="p" lineHeight="24px">
        {data?.film?.openingCrawl}
      </Box>
      <Box my={10}>
        <b>Release Date:</b> {data?.film?.releaseDate}
      </Box>
      <Box my={10}>
        <b>Director:</b> {data?.film?.director}
      </Box>
      <Box my={10}>
        <Box fontWeight="bold" mb={10}>
          Producers:
        </Box>
        {data?.film?.producers?.map((producer) => (
          <Badge key={producer} variant="red" display="inline-block" mr={10}>
            {producer}
          </Badge>
        ))}
      </Box>

      <Box my={10}>
        <Box fontWeight="bold" mb={10}>
          Character Connection:
        </Box>
        {data?.film?.characterConnection?.characters?.map((character) => (
          <Badge
            key={character?.id}
            variant="yellow"
            display="inline-block"
            mr={10}
          >
            {character?.name}
          </Badge>
        ))}
      </Box>

      <Box my={10}>
        <Box fontWeight="bold" mb={10}>
          Planet Connection:
        </Box>
        {data?.film?.planetConnection?.planets?.map((planet) => (
          <Badge
            key={planet?.id}
            variant="green"
            display="inline-block"
            mr={10}
          >
            {planet?.name}
          </Badge>
        ))}
      </Box>
    </Box>
  );
};

export default Film;
