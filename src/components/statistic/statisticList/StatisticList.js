import React, { Fragment } from "react";
import styles from "./StatisticList.module.css";

function randColor() {
  var r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256);
  return "#" + r.toString(16) + g.toString(16) + b.toString(16);
}

export function StatisticList(prop) {
  const statList = prop.statList;
  return (
    <Fragment>
      {statList.map((el) => (
        <li
          style={{ backgroundColor: `${randColor()}` }}
          className={styles.item}
          key={el.id}
        >
          <span className={styles.label}>{el.label}</span>
          <span className={styles.percentage}>{el.percentage}%</span>
        </li>
      ))}
    </Fragment>
  );
}
