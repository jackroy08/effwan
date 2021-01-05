import React from "react";
import styles from "./TeamBack.module.scss";

const TeamBack = (props) => {
  const getDriversJsx = (driver) => (
    <div className={styles.DriverPannel}>
      <img className={styles.DriverPannel__Icon} src={driver.driverSmallImg} alt="driver"></img>
      
      <h5>{driver.strDriverName}</h5>
      <div className={styles.DriverPannel__NumberFlag}>
        <h4>{driver.driverNumber}</h4>
        <img className={styles.DriverPannel__Flag} src={driver.driverCountryImg} alt="country"></img>
      </div>
    </div>
  );
  
  return (
    <div className={styles.TeamCard}>
      <div className={styles.TeamCard__Header}>
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
      <div className={styles.TeamCard_AccentDiv} style={{backgroundColor:props.team.accentColour}}></div>
     
      
    </div>
  );
};

export default TeamBack;
