import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { handleInitialData } from "../Redux/Features/Shared/SharedAction";
// import Dashboard from "./Dashboard";
// import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";

const App = () => {
  const loading = useSelector(({ authedUserReducer }) => authedUserReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <div>
      <LoadingBar />
      {loading && (
        <TweetPage
          match={{
            params: { id: "5c9qojr2d1738zlx09afby" },
          }}
        />
      )}
    </div>
  );
};

export default App;
