import React from "react";
import HomeHistoryItem from "./HomeHistoryItem";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

function Homehistory(props) {
  const historys = props.history;
  return (
    <div className="grid-container">
      {historys.map((thisHistory) => {
        // console.log(history)
        // return <HomeHistoryItem key= {history.number} number={history.number} mintDate={history.mintDate} />
        // use 批量传递props

        return (
          <HomeHistoryItem
            key={nanoid()}
            thisHistory={thisHistory}
            {...props}
          />
        );
      })}
    </div>
  );
}

Homehistory.propTypes = {
  thisHistory: PropTypes.object,
};

export default Homehistory;
