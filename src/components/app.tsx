import { useState, useEffect } from "react";

import ContestList from "./contest-list";
import Header from "./header";
import Contest from "./contest";

// page: contestList or contest

const App = ({ initialData }) => {
  const [page, setPage] = useState<"contestList" | "contest">("contestList");
  const [currentContestId, setCurrentContestId] = useState()

  useEffect(() => {
    window.onpopstate = (event) => {
      const newPage = event.state?.contestId ? "contest" : "contestList"
      setPage(newPage);
      setCurrentContestId(event.state?.contestId);
    }
  })

  const navigateToContest = (contestId) => {
    window.history.pushState({ contestId }, "", `/contest/${contestId}`);
    setPage("contest");
    setCurrentContestId(contestId);
  }

  const pageContent = () => {
    switch (page) {
      case "contestList":
        return <ContestList 
          initialContests={initialData.contests} 
          onContestClick={navigateToContest}
        />
      case "contest":
        return <Contest id={currentContestId} />;
    }
  }


  return (
    <div className="container">
      {pageContent()}
    </div>
  );
};

export default App;