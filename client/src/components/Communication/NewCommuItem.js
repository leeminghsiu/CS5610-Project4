import { nanoid } from "nanoid";
import "./NewCommuItem.css";
function NewCommuItem(props) {
  const listOfFriends = props.listOfFriends;
  const deleteFriend = props.deleteFriend;
  const updateFriend = props.updateFriend;
  return (
    <div className="all-comment-part-0 grid-container">
      {listOfFriends.map((val) => {
        return (
          <div className="all-comment-part-1 grid-item card" key={nanoid()}>
            <div className="all-comment-part-2 name-group">
              <div id="all-comment-part-2-name" className="bold">{" "}{val.name} : </div>
              <div id="all-comment-part-2-comment">{val.comment}</div>
            </div>

            <div className="all-comment-part-2 btn-group">
              <button className="update-btn" onClick={() => {updateFriend(val._id);}}>update message</button>
              <button className="delete-btn" onClick={() => {deleteFriend(val._id);}}>X</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
NewCommuItem.propTypes = {};

export default NewCommuItem;
