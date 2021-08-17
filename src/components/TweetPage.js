import React from "react";
import { useSelector } from "react-redux";
import NewTweet from "./NewTweet";
import Tweet from "./Tweet";

const TweetPage = ({ match }) => {
  const { tweetsReducer } = useSelector((state) => state);
  const { id } = match.params;
  const replies = !tweetsReducer[id]
    ? []
    : tweetsReducer[id].replies.sort(
        (a, b) => tweetsReducer[b].timestamp - tweetsReducer[a].timestamp
      );

  return (
    <div>
      <Tweet id={id} />
      <NewTweet id={id} />
      {replies.length > 0 && <h3 className="center">Replies</h3>}
      <ul>
        {replies.map((replyId) => (
          <li key={replyId}>
            <Tweet id={replyId} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TweetPage;
