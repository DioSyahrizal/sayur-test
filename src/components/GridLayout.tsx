import React, { FC } from "react";
import { Box } from "../utils";

const GridLayout: FC = ({ children }) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr", "1fr 1fr 1fr 1fr"]}
      gridGap={20}
    >
      {children}
    </Box>
  );
};

export default GridLayout;
