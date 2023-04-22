import "./welcome.css";
import joshua from '../../assets/joshua.jpg'
const Welcome = () => {

  return (
    <div className="welcome_flex">
        <div className="welcome_left_text">
            <h1>Welcome!</h1>
            <p>Welcome to IPC Philly. We are so glad that you are taking interest in our church. Feel free to visit us during Sunday Service. We are always ready to pray and worship with you. God bless.</p>
        </div>

        <div className="welcome_right_image">
        </div>
    </div>
  );
};

export default Welcome;