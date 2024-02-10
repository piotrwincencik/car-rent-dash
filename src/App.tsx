import React, { Suspense } from "react";

import { Route, Routes } from "react-router-dom";
const Card = React.lazy(() => import("./components/Card"));
const Create = React.lazy(() => import("./components/Create"));
const Details = React.lazy(() => import("./components/Details"));
const NotFound = React.lazy(() => import("./components/NotFound"));
const Search = React.lazy(() => import("./components/Search"));

function App() {

  return (
    <Suspense fallback={<p>Loading component...</p>}>
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/cars/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Card />} />
          <Route path="/search" element={<Search />} />
        </Routes>
    </Suspense>
  );
}

export default App;


