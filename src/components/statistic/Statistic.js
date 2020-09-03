import React, { Fragment } from "react";
import { StatisticList } from "./statisticList/StatisticList";
import styles from "./Statistic.module.css";

export function Statistic(prop) {
  return (
    <Fragment>
      <div className={styles.section}>
        <h2 className={styles.title}>{prop.title}</h2>

        <ul className={styles.statList}>
          <StatisticList statList={prop.stat} />
        </ul>
      </div>
    </Fragment>
  );
}

// export default Profile;
