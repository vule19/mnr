import { useState, useEffect } from "react";
import { fetchContests } from "../api-client";
import Header from "./header";
import React from "react";


const Contest = ({ id }) => {
    const [contest, setContest] = useState({});

    useEffect(() => {
        fetchContests(id).then((contest) => {
            setContest(contest)
        });
    }, [id]);

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