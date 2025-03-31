import DefaultLayout from '../../layouts/Default Layout';

import BoxItem from './components/box';
import Images from '../../assets/image/Images';
import '../components/styles/dashboard.scss';
import { useState } from 'react';
import DropDown from '../../components/Dropdown';
import CustomDonutChart from './components/piechart';
import PageTitle from '../../components/TitleHeading';
const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState('today');
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const options = [
    { value: 'today', label: 'Today' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  const tableData = [
    {
      id: 1,
      customer: 'Alice',
      menu: 'Beef dumpling in hot and sour soup',
      total: ' $125',
      status: ' Complete',
    },
    {
      id: 2,
      customer: 'Bob',
      menu: 'Salted Pasta with mushroom sauce',
      total: ' $1255',
      status: ' Pending',
    },
    {
      id: 3,
      customer: 'Charlie',
      menu: 'Spicy seasoned seafood noodles ',
      total: ' $1225',
      status: ' Complete',
    },
    {
      id: 4,
      customer: 'CharliePuth',
      menu: 'Spicy seasoned seafood noodles ',
      total: ' $12251',
      status: ' Preparing',
    },
    {
      id: 5,
      customer: 'CharliePuth',
      menu: 'Spicy seasoned seafood noodles ',
      total: ' $12251',
      status: ' Preparing',
    },
    {
      id: 6,
      customer: 'CharliePuth',
      menu: 'Spicy seasoned seafood noodles ',
      total: ' $12251',
      status: ' Complete',
    },
    {
      id: 7,
      customer: 'CharliePuth',
      menu: 'Spicy seasoned seafood noodles ',
      total: ' $12251',
      status: ' Complete',
    },
    {
      id: 8,
      customer: 'CharliePuth',
      menu: 'Spicy seasoned seafood noodles ',
      total: ' $12251',
      status: ' Pending',
    },
  ];

  return (
    <DefaultLayout>
      <div className="dashboard_layout">
        <div className="dashboard_layout_inner">
          <div className="containerPage">
            <div className="row">
              <div className="colPage colPage-7">
                {/* RIGHT_CONTENT */}
                <div className="dashboard_layout_inner_right">
                  <div className="dashboard_title">
                    <PageTitle title="Dashboard" />
                  </div>
                  <div className="sec-gap">
                    <div className="summary_box">
                      <div className="row">
                        <div className="col col-3">
                          <BoxItem
                            percentage="+32.40"
                            icon1={Images.coin}
                            number="10,243.00"
                            title="Total Revenue"
                          />
                        </div>
                        <div className="col col-3">
                          <BoxItem
                            percentage="-0.40"
                            icon1={Images.coin}
                            number="10,243.00"
                            title="Total Revenue"
                          />
                        </div>
                        <div className="col col-3">
                          <BoxItem
                            percentage="32.40"
                            icon1={Images.coin}
                            number="23,456"
                            title="Total Dish Ordered"
                          />
                        </div>
                        <div className="col col-3">
                          <BoxItem
                            percentage="-2.40"
                            icon1={Images.coin}
                            number="1,234"
                            title="Total Customer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sec-gap box_item order_report">
                    <div className="order_report_inner">
                      <div className="order_report_title">
                        <h1>Order Report</h1>
                        <div className="order_report_filter">
                          <button className="btn --dark order_report_filter_inner">
                            <img
                              className="filter_icon"
                              src={Images.option}
                              alt=""
                            />
                            <p>Filter</p>
                          </button>
                        </div>
                      </div>
                      <div className="order_report_table">
                        <div className="order_report_table_inner">
                          <table>
                            <thead style={{ color: 'white' }}>
                              <tr>
                                <th>Customer</th>
                                <th>Menu</th>
                                <th>Total Payment</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {tableData.map((data) => (
                                <tr key={data.id}>
                                  <td>{data.customer}</td>
                                  <td>{data.menu}</td>
                                  <td>{data.total}</td>
                                  <td
                                    className={`status ${data.status.toLowerCase()}`}
                                  >
                                    {data.status}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="colPage colPage-3">
                {/* LEFT_CONTENT */}
                <div className="dashboard_layout_inner_left">
                  <div className="order_list">
                    <div className="order_list_inner">
                      <div className="order_list_header">
                        <div className="order_list_header_inner">
                          <h2>Most Ordered</h2>
                          <div className="order_list_dropdown">
                            <DropDown
                              options={options}
                              value={selectedOption}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="order_list_inner_items sec-gap  ">
                        <div className="inner  ">
                          <div
                            className="item_order prod_item_info"
                            id="order_1"
                          >
                            <div className="item_img">
                              <img
                                src={Images.food1}
                                alt=""
                                className="prod_img"
                              />
                            </div>
                            <div className="prod_item_title">
                              <p>Spicy seasoned seafood noodles</p>
                              <p className="sub_text">200 dishes ordered</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="order_list_inner_items sec-gap  ">
                        <div className="inner  ">
                          <div
                            className="item_order prod_item_info"
                            id="order_1"
                          >
                            <div className="item_img">
                              <img
                                src={Images.food1}
                                alt=""
                                className="prod_img"
                              />
                            </div>
                            <div className="prod_item_title">
                              <p>Spicy seasoned seafood noodles</p>
                              <p className="sub_text">200 dishes ordered</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="order_list_inner_items sec-gap  ">
                        <div className="inner  ">
                          <div
                            className="item_order prod_item_info"
                            id="order_1"
                          >
                            <div className="item_img">
                              <img
                                src={Images.food1}
                                alt=""
                                className="prod_img"
                              />
                            </div>
                            <div className="prod_item_title">
                              <p>Spicy seasoned seafood noodles</p>
                              <p className="sub_text">200 dishes ordered</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="btn --pri cta_btn"
                        style={{ width: '100%' }}
                      >
                        View All
                      </div>
                    </div>
                  </div>
                  <div className="order_list order_figure  ">
                    <div className="order_list_inner">
                      <div className="order_list_header">
                        <div className="order_list_header_inner">
                          <h2>Most Type of Order</h2>
                          <div className="order_list_dropdown">
                            <DropDown
                              options={options}
                              value={selectedOption}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <CustomDonutChart />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
export default Dashboard;
