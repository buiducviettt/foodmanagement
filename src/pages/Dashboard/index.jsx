import DefaultLayout from '../../layouts/Default Layout';
import { format } from 'date-fns';
import BoxItem from './components/box';
import Images from '../../assets/image/Images';
import '../components/styles/dashboard.scss';
import { useState, useEffect } from 'react';
const Dashboard = () => {
  const [date, setDate] = useState('');
  const tableData = [
    {
      id: 1,
      customer: 'Alice',
      menu: 'Pizza',
      total: ' $125',
      status: ' Complete',
    },
    {
      id: 2,
      customer: 'Bob',
      menu: 'Burger',
      total: ' $1255',
      status: ' Pending',
    },
    {
      id: 3,
      customer: 'Charlie',
      menu: 'Pasta',
      total: ' $1225',
      status: ' Complete',
    },
  ];
  useEffect(() => {
    const now = new Date();
    const formattedDate = format(now, 'EEEE, d MMM yyyy'); // Format ngày
    setDate(formattedDate);
  }, []);
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
                    <h1>Dashboard</h1>
                    <p>{date}</p>
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
                            percentage="-32.40"
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
                            percentage="2.40"
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
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Customer</td>
                              </tr>
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
                <div className="dashboard_layout_inner_left"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
export default Dashboard;
