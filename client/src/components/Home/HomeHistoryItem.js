import { useState } from "react";
import "./HomeHistoryItem.css";
function HomeMintResultItem(props) {

  // console.log(props.thisHistory)
  const [mouse, setMouse] = useState(false);
  const history = props.thisHistory;
  const deleteMintById = props.deleteMintById;
  const updateMintNameById = props.updateMintNameById;

  //fucntion change div color when hover above
  const handleMouse = (flag) => {
    return () => {
      setMouse(flag);
    };
  };

  return (
    <div
      className="HomeMintResultItem grid-item card"
      style={{ backgroundColor: mouse ? "azure" : "white" }}
      onMouseLeave={handleMouse(false)}
      onMouseEnter={handleMouse(true)}
    >
      <div className="history-info-group">
        <p><span className="bold">Name: </span><span>{history.name}</span></p>
        <p><span className="bold">Number: </span><span>{history.number}</span></p>
        <p><span className="bold">MintDate: </span><span>{history.date}</span></p>
      </div>
      <div className="history-btn-group">
        <button
          className="update-btn history-btn"
          onClick={() => updateMintNameById(history._id)}
        >Update</button>
        <button
          className="delete-btn history-btn"
          onClick={() => deleteMintById(history._id)}
        >X</button>
      </div>
    </div>
  );
}

HomeMintResultItem.propTypes = {};

export default HomeMintResultItem;
