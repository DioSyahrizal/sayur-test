import React, { FC, Suspense } from "react";
import { Route, Routes } from "react-router";
import { Header } from "./components";

const Dashboard = React.lazy(() => import("./modules/dashboard"));
const Peoples = React.lazy(() => import("./modules/peoples"));

const App: FC = () => {
  return (
    <Suspense fallback={<>Loading page</>}>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/peoples" element={<Peoples />} />
      </Routes>
    </Suspense>
  );
};

export default App;
