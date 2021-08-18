import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { Route, Switch } from "react-router-dom";
import { handleInitialData } from "../Redux/Features/Shared/SharedAction";
import Nav from "./Navbar";
import Dashboard from "./Dashboard";
import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";
const App = () => {
  const loading = useSelector(({ authedUserReducer }) => authedUserReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <>
      <LoadingBar />
      <Nav />
      {loading && (
        <Switch className="container">
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/tweet/:id" component={TweetPage} />
          <Route exact path="/new" component={NewTweet} />
        </Switch>
      )}
    </>
  );
};

export default App;
