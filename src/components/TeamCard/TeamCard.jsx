import React from "react";

import styles from "./TeamCard.module.scss";


const TeamCard = (props) => {

  const getDriversJsx = (driver) => (
    <div className={styles.DriverPannel}>
      <p>{driver.strDriverName}</p>
      <img className={styles.DriverPannel__Icon} src={driver.driverSmallImg} alt="Italian Trulli"></img>
    </div>
  );
  
  return (
    <div className={styles.TeamCard}>
      <div className={styles.TeamCard__Header}>
        <p>{props.team.strShortName}</p>
        <img className={styles.TeamCard__Header_Icon} src={props.team.logoSmall} alt="team logo"></img>
      </div>
      <img className={styles.TeamCard__Car_Icon} src={props.team.carImg} alt="team logo"></img>
      <div className={styles.DriverList}>
        {props.team.drivers.map(getDriversJsx)}
      </div>
      
    </div>
  );
};

export default TeamCard;
