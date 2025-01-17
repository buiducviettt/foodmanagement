import DefaultLayout from '../../layouts/Default Layout';
import { format } from 'date-fns';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import ProductList from '../../components/ProductList';
import { useState, useEffect } from 'react';
import '../components/styles/home.scss';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import DropDown from '../../components/Dropdown';

const Home = () => {
  const options = [
    {
      value: 'dinein',
      label: 'Dine In',
    },
    {
      value: 'togo',
      label: 'To Go',
    },
    {
      value: 'delivery',
      label: 'Delivery',
    },
  ];
  const [value, setValue] = useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [date, setDate] = useState('');
  useEffect(() => {
    const now = new Date();
    const formattedDate = format(now, 'EEEE, d MMM yyyy'); // Format ngày
    setDate(formattedDate);
  }, []);
  return (
    <DefaultLayout>
      <div className="home_layout ">
        <div className="home_menu">
          <div className="home_header">
            <div className="home_header_info">
              <h1>Đức Việt F&B</h1>
              <p>{date}</p>
            </div>
            <div className="home_header_search">
              <TextField
                placeholder="Search for food, coffee, etc.."
                variant="outlined"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon style={{ color: '#fff', fontSize: '2rem' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  width: '100%',
                  maxWidth: '400px',
                  '& .MuiOutlinedInput-root': {
                    background: '#2D303E',
                    fontSize: '1.5rem',
                    color: 'white',
                    padding: '1rem',
                    borderRadius: '8px',
                    '& fieldset': {
                      borderColor: '#393C49',
                    },
                    '&:hover fieldset': {
                      borderColor: '#ea7c69',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#ea7c69',
                    },
                  },
                }}
              />
            </div>
          </div>
          <div className="home_tabs sec-gap">
            <Box>
              <Tabs
                TabIndicatorProps={{
                  style: { backgroundColor: '#EA7C69' }, // Đổi màu dòng kẻ ở đây
                }}
                value={value}
                onChange={handleChange}
                sx={{
                  '& .MuiTab-root': { color: '#fff', fontSize: '1.4rem' }, // Màu chữ mặc định
                  '& .Mui-selected': { color: '#EA7C69 !important' },
                }}
              >
                <Tab value="one" label="Hot Dishes" />
                <Tab value="two" label="Cold Dishes" />
                <Tab value="three" label="Soup" />
                <Tab value="four" label="Grill" />
                <Tab value="five" label="Appetizer" />
                <Tab value="six" label="Dessert" />
              </Tabs>
              <div className="sec-gap home_tabs_title ">
                <h1>Choose Dishes</h1>
                <DropDown label="Type" options={options} />
              </div>

              <div>
                <Box sx={{ marginTop: '2.4rem', color: '#fff' }}>
                  {value === 'one' && (
                    <div className="home_prod">
                      <div className="home_prod_list">
                        <ProductList />
                      </div>
                    </div>
                  )}
                  {value === 'two' && (
                    <div className="home_prod">
                      <div className="home_prod_list">
                        <ProductList />
                      </div>
                    </div>
                  )}
                  {value === 'three' && (
                    <div>
                      <p>Hiện tại chưa có món này!</p>
                    </div>
                  )}
                  {value === 'four' && (
                    <div>
                      <p>Hiện tại chưa đến thời gian bán !</p>
                    </div>
                  )}
                </Box>
              </div>
            </Box>
          </div>
        </div>
        <div className="home_order">
          <div className="home_order_inner">
            <h1>Orders #34562</h1>
            <div className="order_methods sec-gap">
              <button className=" btn btn--pri order_button dine_in">
                Dine In
              </button>
              <button className="btn order_button to_go">To Go</button>
              <button className=" btn order_button delivery">Delivery</button>
            </div>
            <div className="sec-gap home_order_table">
              <table className="home_order_table_inner">
                <thead className="table_heading_wrapper">
                  <tr>
                    <th className="table_headings" style={{ color: 'white' }}>
                      Item
                    </th>
                    <th className="table_headings" style={{ color: 'white' }}>
                      Qty
                    </th>
                    <th className="table_headings" style={{ color: 'white' }}>
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ color: 'white' }}>Spicy seasoned sea...</td>
                    <div className="home_order_table_inner_wrapper  ">
                      <td
                        className="home_order_table_inner_wrapper_price "
                        style={{ color: 'white' }}
                      >
                        2
                      </td>
                    </div>

                    <td style={{ color: 'white' }}>$5.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
export default Home;
