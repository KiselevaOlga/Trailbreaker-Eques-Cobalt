import React from "react";
import styles from "./SingleApplication.module.css";

const SingleApplication = ({ application }) => {
  // it looks a bit different from the design but the quickest to format the date
  // but it needs to be tested properly because dates and currencies are tricky to work with
  const applicationDate = new Date(
    application.date_created
  ).toLocaleDateString();
  const expiryDate = new Date(application.expiry_date).toLocaleDateString();

  // same with the currency, I prefer using third party libraries to represent currencies
  const formattedAmount = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(application.loan_amount);

  return (
    <div className={styles.SingleApplication}>
      <div className={styles.cell}>
        <sub>Company</sub>
        {application.company}
      </div>
      <div className={styles.cell}>
        <sub>Name</sub>
        {application.first_name} {application.last_name}
      </div>
      <div className={`${styles.cell} ${styles.email}`}>
        <sub>Email</sub>
        {application.email}
      </div>
      <div className={styles.cell}>
        <sub>Loan Amount</sub>
        {formattedAmount}
      </div>
      <div className={styles.cell}>
        <sub>Application Date</sub>
        {applicationDate}
      </div>
      <div className={styles.cell}>
        <sub>Expiry date</sub>
        {expiryDate}
      </div>
    </div>
  );
};

export default SingleApplication;
