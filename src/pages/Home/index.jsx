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
import { useCart } from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Images from '../../assets/image/Images';
import Form from 'react-bootstrap/Form';
import Modal from 'react-modal';
Modal.setAppElement('#root');
const Home = () => {
  const [formData, setFormData] = useState({
    cardholderName: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    tableNo: '144',
  });
  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [openPopup, setOpenPopup] = useState(false);
  const handleOpenPopup = () => {
    console.log('open popup');
    setOpenPopup(true);
  };
  const handleClosePopup = () => {
    console.log('open popup');
    setOpenPopup(false);
  };
  const [currentStep, setCurrentStep] = useState(1);
  const { cartItems, removeFromCart, totalPrice } = useCart();
  const discount = 0.5;
  const handleNextStep = () => {
    return setCurrentStep((prev) => prev + 1);
  };
  const handlePrevStep = () => {
    return setCurrentStep((prev) => prev - 1);
  };

  let subTotal = Number(totalPrice) - discount;
  if (subTotal < 0) {
    subTotal = 0;
  }

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
      <>
        {' '}
        <div className="home_layout ">
          <div className="home_menu">
            <div className="home_header">
              <div className="home_header_info">
                <h1>Ducky F&B</h1>
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
                        <SearchIcon
                          style={{ color: '#fff', fontSize: '2rem' }}
                        />
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
              {currentStep === 1 && (
                <div>
                  <h1>Orders #34562</h1>
                  <div className="order_methods sec-gap">
                    <div className=" btnn btnn--pri order_div dine_in">
                      Dine In
                    </div>
                    <div className="btnn order_div to_go">To Go</div>
                    <div className=" btnn order_div delivery">Delivery</div>
                  </div>
                  <div className="sec-gap home_order_table">
                    <table className="home_order_table_inner">
                      <thead className="table_heading_wrapper">
                        <tr>
                          <th
                            className="table_headings"
                            style={{ color: 'white' }}
                          >
                            Item
                          </th>
                          <th
                            className="table_headings"
                            style={{ color: 'white' }}
                          >
                            Qty
                          </th>
                          <th
                            className="table_headings"
                            style={{ color: 'white' }}
                          >
                            Price
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.length === 0 ? (
                          <p>Hiện không có sản phẩm này</p>
                        ) : (
                          cartItems.map((item) => (
                            <tr key={item.id}>
                              <td
                                style={{ color: 'white' }}
                                className="prod_item_info"
                              >
                                <img
                                  src={item.image}
                                  alt=""
                                  className="prod_img"
                                />
                                {item.name}
                              </td>
                              <input
                                placeholder="Order Note..."
                                type="text"
                                className="comment_order"
                                style={{
                                  width: '30rem',
                                  fontSize: '1.4rem',
                                  height: '5rem',
                                }}
                              />
                              <td
                                className="home_order_table_inner_wrapper_price"
                                style={{ color: 'white' }}
                              >
                                {item.quantity}
                              </td>
                              <td style={{ color: 'white' }}>
                                {item.price}
                                <div className="remove_item icon">
                                  <FontAwesomeIcon
                                    icon={faTrash}
                                    onClick={() => removeFromCart(item.id)}
                                  />
                                </div>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                  <div
                    className="sec-gap home_order_total"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2rem',
                    }}
                  >
                    <div
                      className="home_order_discount"
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <input
                        type="text"
                        placeholder="Enter your discount"
                        className="discount_input"
                      />
                      <div className="btnn btnn--pri">Áp dụng</div>
                    </div>
                    <div
                      className="home_order_discount"
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <p>Sub total</p>
                      <p>${subTotal.toFixed(2)}</p>
                    </div>
                  </div>
                  <div
                    style={{ width: '100%' }}
                    className="btnn --pri order_div"
                    onClick={handleNextStep}
                  >
                    Continue to Payment
                  </div>
                </div>
              )}
              {currentStep === 2 && (
                <div className="home_order_payment">
                  <h1>Payment</h1>
                  <p>3 payment method available</p>
                  <div className="sec-gap home_order_payment_inner">
                    <div className=" payment_method">
                      <div className="payment_method_title">
                        <h2>Payment Method</h2>
                      </div>
                      <div className="payment_method_inner">
                        <div className="row">
                          <div className="col col-4">
                            <div
                              className="method_item"
                              tabIndex="0"
                              id="credit_card"
                            >
                              <img
                                src={Images.card}
                                alt=""
                                className="method_img"
                              />
                              <div className="method_name">
                                <p>Credit Card</p>
                              </div>
                            </div>
                          </div>
                          <div className="col col-4">
                            <div
                              className="method_item"
                              tabIndex="0"
                              id="paypal"
                            >
                              <img
                                src={Images.paypal}
                                alt=""
                                className="method_img"
                              />
                              <div className="method_name">
                                <p>Paypal</p>
                              </div>
                            </div>
                          </div>
                          <div className="col col-4">
                            <div className="method_item" tabIndex="0" id="cash">
                              <img
                                src={Images.wallet}
                                alt=""
                                className="method_img"
                              />
                              <div className="method_name">
                                <p>Cash</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sec-gap home_order_payment_inner_form">
                      <Form className=" home_order_payment_form">
                        <Form.Group>
                          <Form.Label>Cardholder Name</Form.Label>
                          <div className="form_input">
                            <Form.Control
                              name="cardholderName"
                              value={formData.cardholderName}
                              type="text"
                              placeholder="Levi Ackerman"
                              onChange={handleChangeForm}
                            ></Form.Control>
                          </div>
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Card Number</Form.Label>
                          <div className="form_input">
                            <Form.Control
                              name="cardNumber"
                              value={formData.cardNumber}
                              type="text"
                              placeholder="2564 1421 0897 1244"
                              onChange={handleChangeForm}
                            ></Form.Control>
                          </div>
                        </Form.Group>
                        <Form.Group>
                          <div className="row">
                            <div className="col col-6">
                              <Form.Label>Expiration Date</Form.Label>
                              <div className="form_input">
                                <Form.Control
                                  name="expirationDate"
                                  value={formData.expirationDate}
                                  type="text"
                                  placeholder="02/2022"
                                  onChange={handleChangeForm}
                                ></Form.Control>
                              </div>
                            </div>

                            <div className="col col-6">
                              <Form className=" home_order_payment_form">
                                <Form.Group>
                                  <Form.Label>CVV</Form.Label>
                                  <div className="form_input">
                                    <Form.Control
                                      name="cvv"
                                      value={formData.cvv}
                                      type="password"
                                      onChange={handleChangeForm}
                                    ></Form.Control>
                                  </div>
                                </Form.Group>
                              </Form>
                            </div>
                            <div className="col col-6"></div>
                          </div>
                        </Form.Group>
                        <Form.Group>
                          <div className="row">
                            <div className="col col-6">
                              <Form.Label>Order Type</Form.Label>
                              <div className="form_input">
                                <Form.Select type="text" placeholder="Dine In">
                                  <option>Dine In</option>
                                  <option>To Go</option>
                                  <option>Delivery</option>
                                </Form.Select>
                              </div>
                            </div>
                            <div className="col col-6">
                              <Form.Label>Table no.</Form.Label>
                              <div className="form_input">
                                <Form.Control
                                  onClick={handleChangeForm}
                                  name="tableNo"
                                  type="text"
                                  value="144"
                                  readOnly
                                ></Form.Control>
                              </div>
                            </div>
                            <div className="col col-6"></div>
                          </div>
                        </Form.Group>
                      </Form>
                      <div className="cta_group order_cta_group">
                        <div
                          className="btnn --pri cta_btnn cancel_btnn"
                          onClick={handlePrevStep}
                        >
                          <p className="shining_text">Cancel</p>
                        </div>
                        <div
                          className="btnn --pri cta_btnn confirm_btnn"
                          onClick={handleOpenPopup}
                        >
                          <p className="shining_text">Confirm Payment</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <Modal
            className="order_popup"
            isOpen={openPopup}
            onRequestClose={handleClosePopup}
            style={{
              content: {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: '20px',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                color: 'white',
                justifyContent: 'center',
                alignItems: 'center', // Đảm bảo nội dung bên trong được căn giữa
              },
            }}
          >
            <div className="order_form_thankyou">
              <h1>THANK YOU FOR YOUR ORDER</h1>
            </div>
            <div className="order_form_info" style={{ textAlign: 'center' }}>
              <h2>Here is your information</h2>
              <p>
                <strong>Cardholder Name:</strong> {formData.cardholderName}
              </p>
              <p>
                <strong>Card Number:</strong> {formData.cardNumber}
              </p>
              <p>
                <strong>Expiration Date:</strong> {formData.expirationDate}
              </p>
              <p>
                <strong>CVV:</strong> {formData.cvv}
              </p>
              <p>
                <strong>Table No.:</strong> {formData.tableNo}
              </p>
            </div>
          </Modal>
        </div>
      </>
    </DefaultLayout>
  );
};
export default Home;
