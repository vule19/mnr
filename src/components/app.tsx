import { useState, useEffect } from "react";

import ContestList from "./contest-list";
import Header from "./header";
import Contest from "./contest";

// page: contestList or contest

const App = ({ initialData }) => {
  const [page, setPage] = useState<"contestList" | "contest">(initialData.currentContest ? "contest" : "contestList");
  const [currentContest, setCurrentContest] = useState < object | undefined > (initialData.currentContest);

  useEffect(() => {
    window.onpopstate = (event) => {
      const newPage = event.state?.contestId ? "contest" : "contestList"
      setPage(newPage);
      setCurrentContest({id: event.state?.contestId});
    }
  })

  const navigateToContest = (contestId) => {
    window.history.pushState({ contestId }, "", `/contest/${contestId}`); // take data, title, url
    setPage("contest");
    setCurrentContest({id: contestId});
  }

  const pageContent = () => {
    switch (page) {
      case "contestList":
        return <ContestList 
          initialContests={initialData.contests} 
          onContestClick={navigateToContest}
        />
      case "contest":
        return <Contest initialContest={currentContest} />;
    }
  }


  return (
    <div className="container">
      {pageContent()}
    </div>
  );
};

export default App;