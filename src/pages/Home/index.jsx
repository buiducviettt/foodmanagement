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
import Images from '../../assets/image/Images';
import ProductItem from '../../components/ProductList/ProductItem';

const Home = () => {
  const [value, setValue] = useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [date, setDate] = useState('');
  useEffect(() => {
    const now = new Date();
    const formattedDate = format(now, 'EEEE, d MMM yyyy '); // Format ngày
    setDate(formattedDate);
  }, []);
  return (
    <DefaultLayout>
      <div className="home_layout ">
        <div className="home_menu">
          <div className="home_header">
            <div className="home_header_info">
              <h1>Đức Việt Restaurant</h1>
              <p>{date}</p>
            </div>
            <div className="home_header_search">
              <TextField
                placeholder="Search for food, coffe, etc.."
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
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
export default Home;
