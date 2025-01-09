import { useEffect, useState } from "react";
import React from "react";

import { fetchContestList } from "../api-client";
import Header from "./header";
import ContestPreview from "./contest-preview";

const ContestList = ({ initialContests, onContestClick }) => {
  const [contests, setContests] = useState(initialContests);

  useEffect(() => {
    // fetchContestList().then((data) => {
    //   setContests(contests);
    // });
  }, []);

  return (
    <>
      <Header message="Naming Contests" />

      <div className="contest-list">
        {contests.map((contest) => {
          return (
            <ContestPreview key={contest.id} contest={contest} onClick={onContestClick} />
          );
        })}
      </div>
    </>
  );
};

export default ContestList;