import { Link } from "react-router-dom";
import mypic from "../assets/Project_images/dpk.jpg";
const Header = () => {
  return (
    <div className="main_header">
      <div className="container main_header_container">
        <div className="main_header_left">
          <h4>#100day of hard work</h4>
          <h1>Happy to share my words</h1>
          <p>
            learning new stack and applying to the project is like opening new
            dimension in itself having fun ,learning crazy stuff ,{" "}
          </p>
          <Link to="/about" className="btn lg">
            Let's Talk
          </Link>
        </div>
        <div className="main_header_right">
          <div className="main_header_circle"></div>
          <div className="main_header_image">
            <img src={mypic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
