import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleInitialData } from "../Redux/Shared/SharedAction";
import Dashboard from "./Dashboard";

const App = () => {
  const loading = useSelector(({ authedUserReducer }) => authedUserReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <div>
      <h1>starter code </h1>
      {loading && <Dashboard />}
    </div>
  );
};

export default App;
