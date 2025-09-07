import React from "react";
import NavMenu from "./NavMenu";
import UserBox from "./UserBox";

const UserSidebar = () => {
  return (
    <div className="w-full h-[calc(100vh-96px)] flex flex-col p-4 gap-4">
      <UserBox />
      <NavMenu />
    </div>
  );
};

export default UserSidebar;
