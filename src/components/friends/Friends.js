import React, { Fragment } from "react";
import styles from "./Friends.module.css";
export function Friends(prop) {
  const friendsList = prop.friends;
  return (
    <Fragment>
      <ul className={styles.friendList}>
        {friendsList.map((el) => (
          <li className={styles.item} key={el.id}>
            <span
              style={
                el.isOnline
                  ? { backgroundColor: "green" }
                  : { backgroundColor: "red" }
              }
              className={styles.status}
            ></span>
            <img className={styles.avatar} src={el.avatar} alt="" width="48" />
            <p className="name">{el.name}</p>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
