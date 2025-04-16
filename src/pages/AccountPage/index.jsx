import { useState } from 'react';
import '../components/styles/account.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AccountPage = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.get(
        `https://673c683296b8dcd5f3f9d8d8.mockapi.io/food/data/users`,
      );

      // Kiểm tra nếu có dữ liệu trả về
      const user = response.data.find(
        (user) => user.username === username && user.password === password,
      );
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        alert('Log in thành công');
        console.log('Login thành công:', user);
        navigate('/');
      } else {
        alert('Tài khoản không tồn tại');
      }
    } catch (error) {
      console.error('Lỗi kết nối tới MockAPI:', error.message);
      alert('Có lỗi khi kết nối tới MockAPI. Vui lòng thử lại sau.');
    }
  };

  return (
    <div className="account_page">
      <div className="container">
        <div className="account_wrapper">
          <div className="account_table">
            <div className="inner">
              <div className="account_title">
                <h1>WELCOME TO DUCKY RESTAURANT </h1>
                <h2 className="text-center">Please sign in to see the app </h2>
              </div>
              <ul className="form_groups">
                <li className="form_group">
                  <label htmlFor="">Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </li>
                <li className="form_group">
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </li>
              </ul>
              <button className="btnn --pri w-100 log_in" onClick={handleLogin}>
                Log in
              </button>
              <span>
                Don't have account, please{' '}
                <a href="/signup" style={{ textDecoration: 'underline' }}>
                  {' '}
                  Sign up
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
