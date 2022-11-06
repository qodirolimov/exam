import React from "react";
import { Routes, Route } from "react-router-dom";
import Overview from "../pages/Overview";
import Repositories from "../pages/Repositories";
import Followers from "../pages/Followers";
import Following from "../pages/Following";

const index = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/repositories" element={<Repositories />} />
          <Route path="/followers" element={<Followers />} />
          <Route path="/following" element={<Following />} />
        </Routes>
      </main>
    </>
  );
};

export default index;
