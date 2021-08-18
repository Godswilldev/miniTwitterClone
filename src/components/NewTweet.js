import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleAddTweet } from "../Redux/Features/Tweets/TweetAction";

const NewTweet = ({ id }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [toHome, setToHome] = useState(false);

  const handleChange = (evt) => {
    evt.preventDefault();
    setText(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(handleAddTweet(text, id));
    setText("");
    setToHome(id ? false : true);
  };

  const tweetLeft = 280 - text.length;

  const toHomez = toHome ? (
    <Redirect to="/" />
  ) : (
    <>
      <h3 className="center">Compose New Tweet</h3>
      <form className="new-tweet" onSubmit={handleSubmit}>
        <textarea
          name="text"
          id="text"
          cols="30"
          rows="10"
          value={text}
          onChange={handleChange}
          placeholder="What's Happening ?"
          className="textarea"
          maxLength={280}
        />
        {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}
        <button className="btn" disabled={text === ""} type="submit">
          Submit
        </button>
      </form>
    </>
  );
  return toHomez;
};

export default NewTweet;
