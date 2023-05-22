import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./Component/Post/Detail";
import Heading from "./Component/Heading";
import Upload from "./Component/Post/Upload";
import List from "./Component/Post/List";
import Edit from "./Component/Post/Edit";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Heading />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/post/:postNum" element={<Detail />} />
          <Route path="/edit/:postNum" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
