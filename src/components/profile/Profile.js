import React, { Fragment } from "react";
import { Stats } from "./stats/Stats";
import styles from "./Profile.module.css";
export function Profile(user) {
  return (
    <Fragment>
      <div className={styles.section}>
        <img
          className={styles.avatar}
          src={user.avatar}
          alt="user avatar"
        ></img>
        <h2 className={styles.name}>{user.name}</h2>
        <p className={styles.tag}>@{user.tag}</p>
        <p className={styles.location}>{user.name}</p>

        <ul className={styles.stats}>
          <Stats {...user.stats} />
        </ul>
      </div>
    </Fragment>
  );
}

// export default Profile;
