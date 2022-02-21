import React, { FC } from "react";
import useQueryParams from "../../hooks/useQueryParams";

const Peoples: FC = () => {
  const id = useQueryParams("id");

  console.log(id);
  return <div>Peoples: {id}</div>;
};

export default Peoples;
