import React from "react";
import { SidebarHeader } from ".";

import FolderList from "./FolderList";

function Sidebar() {
  return (
    
    
    <div className="left__sidebar">
      <SidebarHeader title='Папки'/>
      <div className="sidebar__content">
        <div className="container">
          <FolderList />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
