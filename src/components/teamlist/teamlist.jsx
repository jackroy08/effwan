import React from "react";
import styles from "./TeamList.module.scss";
import TeamCard from "../TeamCard/TeamCard";
import teams from "../../data/teams";

const TeamList = () => {
  const getTeamJsx = (team) => (
    <div className={styles.card}>
      <TeamCard team={team}/>
    </div>
 
   
  );  

    return (
      <div className={styles.cards}>
        {teams.map(getTeamJsx)}
      </div>
    );
}


export default TeamList;
