import { useState, useEffect } from "react";
import { fetchContests } from "../api-client";
import Header from "./header";
import React from "react";


const Contest = ({ initialContest }) => {
    const [contest, setContest] = useState(initialContest);

    useEffect(() => {
        if (!contest.names) {
            fetchContests(contest.id).then((contest) => {
                setContest(contest)
            });
        }   
    }, [contest.id, contest.names]);

    return (
        <React.Fragment>
            <Header message={contest.contestName} />
            <div className="contest">
                <div className="title">Contest Description</div>
                <div className="description">{contest.description}</div>
            </div>
        </React.Fragment>
    );
};

export default Contest;