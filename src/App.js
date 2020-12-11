import { Content, Sidebar, Theme } from "./components";
import React from 'react'



function App() {
  const [theme, setTheme] = React.useState(false);
  const changeTheme = () =>{
    setTheme(!theme)
  }
  return (
    
    <div className={`page ${theme ? 'page--dark':''}`}>
        <Sidebar/>
        <Content/>
        <Theme onClick={changeTheme}/>
        
    </div>
  );
}

export default App;
