import React from "react";
import './App.css';
import TeamCard from "./components/TeamCard";
import TeamList from "./components/TeamList";
import teams from "./data/teams";

const App = () => {
  

    return (
      <>
       <TeamList teams={teams}/>
      </>
    );
}

export default App;
