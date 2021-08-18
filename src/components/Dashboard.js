import React from "react";
import { useSelector } from "react-redux";
import Tweet from "./Tweet";

const Dashboard = () => {
  const tweetReducer = useSelector(({ tweetsReducer }) => tweetsReducer);

  const tweetIds = Object.keys(tweetReducer).sort(
    (a, b) => tweetReducer[b].timeStamp - tweetReducer[a].timeStamp
  );

  return (
    <div>
      <h3 className="center">Your Timeline</h3>
      <ul className="dashboard-list">
        {tweetIds.map((id) => (
          <li key={id}>
            <Tweet id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
