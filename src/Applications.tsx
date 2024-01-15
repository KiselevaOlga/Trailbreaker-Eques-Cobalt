import React, { useEffect, useState } from "react";
import SingleApplication from "./SingleApplication";
import styles from "./Applications.module.css";
import { Button } from "./ui/Button/Button";

const Applications = () => {
  // page state to be aware how many pages already been loaded
  const [page, setPage] = useState<number>(0);
  // data state to show on ui
  const [applicants, setApplicants] = useState([]);

  const [error, setError] = useState<boolean>(false);

  const fetchApplications = async () => {
    const rawResponse = await fetch(
      `http://localhost:3001/api/applications?_page=${page}&_limit=5`
    );
    if (!rawResponse.ok) {
      setError(true);
    }
    const responseJson = await rawResponse.json();

    return responseJson;
  };

  // everytime the user will click Load more, we would fetch new page with the new data
  // and add to the existing array of applicants
  const handleLoadMore = async () => {
    setPage(page + 1);
    const response = await fetchApplications();
    // we need to add new loaded applicants to our state, otherwise it is going to be overwritten
    setApplicants(applicants.concat(response));
  };

  // by using useEffect , we would fetch the data after component will mount
  // and it will happen once because the list of dependencies is empty
  useEffect(() => {
    fetchApplications().then((res) => setApplicants(res));
  }, []);

  // show an error if there is something wrong with the response
  if (error) {
    return (
      <div className={styles.centerItems}>
        <h2>Ooops, something went wrong! Please try again </h2>
      </div>
    );
  }

  return (
    <div className={styles.Applications}>
      {applicants.map((applicant, index) => (
        <SingleApplication key={index} application={applicant} />
      ))}
      <div className={styles.centerItems}>
        <Button onClick={handleLoadMore} className={undefined}>
          Load more
        </Button>
      </div>
    </div>
  );
};

export default Applications;
