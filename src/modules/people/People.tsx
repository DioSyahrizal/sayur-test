import React, { FC } from "react";
import { useParams } from "react-router";
import { useQuery } from "@apollo/client";

import { Badge, Loading } from "../../components";
import { Box } from "../../utils";
import GET_PERSON from "../../hooks/query/usePerson";
import { GetPerson } from "../../hooks/query/__generated__/GetPerson";

const People: FC = () => {
  const { id } = useParams();
  const { data, loading } = useQuery<GetPerson>(GET_PERSON, {
    variables: { id },
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <Box px={["25px", "100px"]}>
      <Box as="h1">{data?.person?.name}</Box>
      <Box my={10}>
        <b>Birth Year:</b> {data?.person?.birthYear}
      </Box>
      <Box my={10}>
        <b>Gender:</b> {data?.person?.gender}
      </Box>
      <Box my={10}>
        <b>Height:</b> {data?.person?.height}
      </Box>
      <Box my={10}>
        <b>Mass:</b> {data?.person?.mass}
      </Box>
      <Box my={10}>
        <b>Eye Color:</b> {data?.person?.eyeColor}
      </Box>
      <Box my={10}>
        <b>Hair Color:</b> {data?.person?.hairColor}
      </Box>
      <Box my={10}>
        <b>Species:</b>{" "}
        {data?.person?.species ? data?.person?.species?.name : "Human"}
      </Box>
      <Box my={10}>
        <Box fontWeight="bold" mb={10}>
          Film Connection:
        </Box>
        {data?.person?.filmConnection?.films?.map((film) => (
          <Badge key={film?.id} variant="red" display="inline-block" mr={10}>
            {`Episode ${film?.episodeID}: ${film?.title}`}
          </Badge>
        ))}
      </Box>
    </Box>
  );
};

export default People;
