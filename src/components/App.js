import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { handleInitialData } from "../Redux/Features/Shared/SharedAction";
import Dashboard from "./Dashboard";

const App = () => {
  const loading = useSelector(({ authedUserReducer }) => authedUserReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <div>
      <LoadingBar />
      {loading && <Dashboard />}
    </div>
  );
};

export default App;
