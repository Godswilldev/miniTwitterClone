import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const tweetReducer = useSelector(({ tweetsReducer }) => tweetsReducer);

  const tweetIds = Object.keys(tweetReducer).sort(
    (a, b) => tweetReducer[b].timeStamp - tweetReducer[a].timeStamp
  );
  console.log(tweetIds);

  return (
    <div>
      <h1>dashboard</h1>
      <h3 className="center">
        <ul className="dashboard-list">
          {tweetIds.map((id) => (
            <li key={id}>{tweetReducer[id].text}</li>
          ))}
        </ul>
      </h3>
    </div>
  );
};

export default Dashboard;
