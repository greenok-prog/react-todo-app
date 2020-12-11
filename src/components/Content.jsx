import React from "react";


import ContentHeader from "./ContentHeader";


import TaskList from "./TaskList";

function Content() {
  


  return (
    <div className="content">
      <ContentHeader/>
      
      <div className="container">
      <TaskList/>
      
        
      </div>
      
      {/* <div className="sort">
          <button>Все</button>
          <button>Активные</button>
          <button>Завершенные</button>
      </div> */}
    </div>
    
  );
}

export default Content;
