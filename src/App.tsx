import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Index from "./pages";
import NotFound from "./pages/404";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<Navigate to={'404'} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
