import React, {useState} from "react";
import TeamFront from "../TeamFront/TeamFront";
import TeamBack from "../TeamBack/TeamBack";
import styles from "./TeamCard.module.scss";
import teams from "../../data/teams";


const TeamCard = (props) => {
  const {team} = props;
  const [isFaceDown, setIsFaceDown] = useState(false);
  const flipStyles = isFaceDown ? styles.faceDown : "";
  return (
    <section className={`${styles.recipeCard} ${flipStyles}`} onClick={() => setIsFaceDown(!isFaceDown)}>
     
      <div className={styles.front}>
        <TeamFront team={team} />
      </div>
      <div className={styles.back}>
        <TeamBack team={team} />
      </div>
    </section>
  );
  
};

export default TeamCard;
