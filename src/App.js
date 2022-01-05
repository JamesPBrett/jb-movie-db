import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Movie from "./routes/SingleMovie";
import Error from "./routes/Error";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="movies/:id" element={<Movie />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
