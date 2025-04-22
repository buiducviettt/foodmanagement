import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContent';
import DefaultLayout from '../../layouts/Default Layout';
const AccountInfo = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="account_info_page">
      <DefaultLayout>
        <div className="account_info_page_wrapper">
          <div className="account_table">
            <div className="account_tab"></div>
            <div className="account_lists">
              <table>
                <thead>
                  <h1> Hello , {user.username}</h1>
                  <p>Here is your information</p>
                  <tr>
                    <th>
                      <p>Username : {user.username}</p>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <p>Password : {user.password}</p>
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
};
export default AccountInfo;
