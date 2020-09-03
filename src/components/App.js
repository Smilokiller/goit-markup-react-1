import React, { Fragment } from "react";
import user from "../user.json";
import statistic from "../statistical-data.json";
import friends from "../friends.json";
import transactions from "../transactions.json";
import { Profile } from "./profile/Profile.js";
import { Friends } from "./friends/Friends.js";
import { Statistic } from "./statistic/Statistic.js";
import { Transactions } from "./transactions/Transactions.js";

function App() {
  return (
    <Fragment>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stat={statistic} />
      <Friends friends={friends} />
      <Transactions tems={transactions} />
    </Fragment>
  );
}

export default App;
