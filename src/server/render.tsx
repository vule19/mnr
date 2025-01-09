import ReactDOMServer from "react-dom/server";

import { fetchContestList, fetchContests } from "../api-client";

import App from "../components/app";

const serverRender = async (req) => {
  const { contestId } = req.params;

  const initialData = contestId? { currentContest: await fetchContests(contestId) } : { contests: await fetchContestList() };

  const initialMarkup = ReactDOMServer.renderToString(
    <App initialData={ initialData } />,
  );

  return { initialMarkup, initialData};
};

export default serverRender;
