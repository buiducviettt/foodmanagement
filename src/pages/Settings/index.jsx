import DefaultLayout from '../../layouts/Default Layout';
import '../components/styles/setting.scss';
import Images from '../../assets/image/Images';
const Setting = () => {
  const settingOptions = [
    {
      id: 1,
      icon: Images.heart,
      title: 'Appereance',
      desc: 'Dark and Light mode, Font size',
    },
    {
      id: 2,
      icon: Images.restaurant,
      title: 'Restaurant',
      desc: 'Dark and Light mode, Font size 2',
    },
    {
      id: 3,
      icon: Images.restaurant,
      title: 'Restaurant',
      desc: 'Dark and Light mode, Font size 2',
    },
    {
      id: 4,
      icon: Images.restaurant,
      title: 'Restaurant',
      desc: 'Dark and Light mode, Font size 2',
    },
    {
      id: 5,
      icon: Images.restaurant,
      title: 'Restaurant',
      desc: 'Dark and Light mode, Font size 2',
    },
  ];
  return (
    <DefaultLayout>
      <main className="setting_layout">
        <h1 className="setting_layout_title">Settings</h1>
        <div className="sec-gap setting_wrapper">
          <div className="setting_wrapper_left">
            <div className="inner">
              <ul className="settting_options">
                {settingOptions.map((option) => (
                  <li key={option.id} className="setting_option">
                    <div className="item setting_option_details">
                      <img src={option.icon} alt="" />{' '}
                      <div className="item_title">
                        <p>{option.title}</p>
                        <span className="sub_text">{option.desc}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="setting_wrapper_right">
            <div className="inner"></div>
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
};
export default Setting;
