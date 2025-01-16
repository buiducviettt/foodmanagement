import Images from '../../assets/image/Images';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="header">
      <div className="header_wrapper">
        <div className="header_inner">
          <div className="header_logo ">
            <Link to="/">
              <img src={Images.logo} alt="logo" />
            </Link>
          </div>
          <div className="header_icon header_home">
            <Link to="/">
              <img className="icon" src={Images.home} alt="home" />
            </Link>
          </div>
          <div className="header_icon header_discount">
            <Link to="/">
              <img className="icon" src={Images.discount} alt="home" />
            </Link>
          </div>
          <div className="header_icon header_dashboard">
            <Link to="/">
              <img className="icon" src={Images.dashboard} alt="home" />
            </Link>
          </div>
          <div className="header_icon header_message">
            <Link to="/">
              <img className="icon" src={Images.message} alt="message" />
            </Link>
          </div>
          <div className="header_icon header_noti">
            <Link to="/">
              <img className="icon" src={Images.notification} alt="noti" />
            </Link>
          </div>
          <div className="header_icon header_setting">
            <Link to="/">
              <img className="icon" src={Images.setting} alt="setting" />
            </Link>
          </div>
          <div className="header_icon header_logout">
            <Link to="/">
              <img className="icon" src={Images.logout} alt="logout" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
