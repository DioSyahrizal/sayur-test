import React, { FC } from "react";
import { Route, Routes } from "react-router";
import { Header } from "./components";
import { Dashboard } from "./modules/dashboard";
import { Peoples } from "./modules/peoples";
import { Box } from "./utils";

const App: FC = () => {
  return (
    <Box>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/peoples" element={<Peoples />} />
      </Routes>
    </Box>
  );
};

export default App;
