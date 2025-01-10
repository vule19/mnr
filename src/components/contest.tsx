import { useState, useEffect } from "react";
import { fetchContests } from "../api-client";
import Header from "./header";
import React from "react";


const Contest = ({ initialContest, onContestListClick }) => {
    const [contest, setContest] = useState(initialContest);

    useEffect(() => {
        if (!contest.names) {
            fetchContests(contest.id).then((contest) => {
                setContest(contest)
            });
        }   
    }, [contest.id, contest.names]);

    const handleClickContestList = (event) => {
        event.preventDefault();
        onContestListClick();
    }

    return (
        <React.Fragment>
            <Header message={contest.contestName} />
            <div className="contest">
                <div className="title">Contest Description</div>
                <div className="description">{contest.description}</div>

                <div className="title">Proposed Names</div>
                <div className="body">
                    {contest.names?length > 0 ? (
                        <div className="list">
                            {contest.names.map((proposedName) => (
                                <div key={proposedName.id} className="item">{proposedName.name}</div>
                            ))}
                        </div>
                    ) : (
                        <div>No names proposed yet</div>
                    )}
                
                        
                </div>

                <a href="/" className="link" onClick={handleClickContestList}>Home</a>
            </div>
        </React.Fragment>
    );
};

export default Contest;