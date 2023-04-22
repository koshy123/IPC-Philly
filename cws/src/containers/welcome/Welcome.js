import "./welcome.css";
import joshua from '../../assets/joshua.jpg'
const Welcome = () => {

  return (
    <div className="welcome_flex">
        <div className="welcome_left_text">
            <h1>Welcome</h1>
            <p>jsadifjnasfgkjsnfjsnfosjdnfoskdjcnoskcnsdkvjnlo</p>
        </div>

        <div className="welcome_right_image">
            <img src= {joshua} />
        </div>
    </div>
  );
};

export default Welcome;