import React, { FC, Suspense } from "react";
import { Route, Routes } from "react-router";
import { Header } from "./components";
import Loading from "./components/Loading";

const Dashboard = React.lazy(() => import("./modules/dashboard"));
const Film = React.lazy(() => import("./modules/film"));
const Peoples = React.lazy(() => import("./modules/peoples"));
const People = React.lazy(() => import("./modules/people"));
const Planets = React.lazy(() => import("./modules/planets"));
const Planet = React.lazy(() => import("./modules/planet"));

const App: FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/film/:id" element={<Film />} />
        <Route path="/peoples" element={<Peoples />} />
        <Route path="/people/:id" element={<People />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/planet/:id" element={<Planet />} />
      </Routes>
    </Suspense>
  );
};

export default App;
