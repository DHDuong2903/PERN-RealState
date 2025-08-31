import { Sliderbanner } from "@/components/layouts";
import { Search } from "@/components/searchs";
import React from "react";

const HomePage = () => {
  return (
    <div className="relative">
      <Sliderbanner />
      <div>
        <Search />
      </div>
    </div>
  );
};

export default HomePage;
