import React, { Fragment } from "react";
import styles from "./Transactions.module.css";

export function Transactions(prop) {
  const transactionList = prop.tems;
  return (
    <Fragment>
      <table className={styles.transactionHistory}>
        <thead>
          <tr className={styles.titles}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactionList.map((el) => (
            <tr className={styles.lineItem} key={el.id}>
              <td>{el.type}</td>
              <td className={styles.column}>{el.amount}</td>
              <td>{el.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}
