import User from "./User";
import ProfileImage from "./ProfileImage";
import Message from "./Message";
import Actions from "./Actions";
import Timestamp from "./Timestamp";


function Tweet(props) {
  const {user, message, timestamp} = props.tweet

  return (
    <div className="tweet">
      <ProfileImage image={user.image}/>

      <div className="body">
        <div className="top">
          <User name={user.name} handle={user.handle} />
          <Timestamp timestamp={timestamp}/>
        </div>
        <Message message={message} />
        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;