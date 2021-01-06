import React from "react";
import './App.css';
import Navbar from "./components/Navbar";

import TeamList from "./components/TeamList";
import teams from "./data/teams";

const App = () => {
  

    return (
      <>
      <Navbar/>
       <TeamList teams={teams}/>
      </>
    );
}

export default App;
