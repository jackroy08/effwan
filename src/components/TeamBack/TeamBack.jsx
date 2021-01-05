import React from "react";

import styles from "./TeamBack.module.scss";

const TeamBack = (props) => {
  const getDriversJsx = (driver) => (
    <div className={styles.TeamCard_Back_Drivers}>
      <div className={styles.TeamCard_AccentDiv} style={{ backgroundColor: props.team.accentColour }}></div>
      <img className={styles.TeamCard__Car_Icon} src={driver.driverLargeImg} alt="team logo"></img>
      <div className={styles.TeamCard_AccentDiv} style={{ backgroundColor: props.team.accentColour }}></div>
      <p>{driver.strDriverFName}</p>
      <h3>{driver.strDriverName}</h3>
      <div className={styles.TeamCard_Back_Facts}>
        <div>
          <h5>Country</h5>
          <h5>Number</h5>
          <h5>Races</h5>
          <h5>Podiums</h5>
          <h5>Championships</h5>
          <h5>Highest Finish</h5>
          <h5>Highest Qual</h5>

        </div>
        <div className={styles.TeamCard_Back_Facts_Right}>
          <p>{driver.strDriverCountry}</p>
          <p>{driver.driverNumber}</p>
          <p>{driver.races}</p>
          <p>{driver.podiums}</p>
          <p>{driver.championships}</p>
          <p>{driver.highestFinish}</p>
          <p>{driver.highestQualify}</p>
          <p></p>
        </div>
      </div>
      
    </div>
  );

  return (
    <div className={styles.TeamCard_Back}>
      <div className={styles.TeamCardBack_Header}>
        <h2>{props.team.strName}</h2>
        <div className={styles.TeamCard_AccentDiv} style={{ backgroundColor: props.team.accentColour }}></div>
      </div>
      <div className={styles.TeamCard_Back_Facts}>
        <div>
          <h5>Principal</h5>
          <h5>Engine Supplier</h5>
          <h5>Championships</h5>
          <h5>Race Wins</h5>
          <h5>Podiums</h5>
          <h5>Points</h5>

        </div>
        <div className={styles.TeamCard_Back_Facts_Right}>
          <p>{props.team.strPrincipal}</p>
          <p>{props.team.strPowerUnit}</p>
          <p>{props.team.constructorsChampionships}</p>
          <p>{props.team.raceVictories}</p>
          <p>{props.team.podiums}</p>
          <p>{props.team.points}</p>
          <p></p>
        </div>
      </div>
      
      <div className={styles.DriverList}>
      <h2>Drivers</h2>
        {props.team.drivers.map(getDriversJsx)}
      </div>



      {/* <div className={styles.TeamCard__Header}>
        <h2>{props.team.name}</h2>
        <h2>{props.team.strShortName}</h2>
          <div className={styles.TeamCard__Pos} style={{backgroundColor:props.team.accentColour}}>
          <h3>{props.team.strFinish}</h3>
        
        </div>
      </div>
      
      <img className={styles.TeamCard__Car_Icon} src={props.team.carImg} alt="team logo"></img>
      
      <div className={styles.DriverList}>
        {props.team.drivers.map(getDriversJsx)}
      </div>
       */}




    </div>
  );
};

export default TeamBack;
