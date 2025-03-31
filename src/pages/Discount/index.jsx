import DefaultLayout from '../../layouts/Default Layout';
import '../components/styles/discount.scss';
import PageTitle from '../../components/TitleHeading';
import { useState } from 'react';
import Images from '../../assets/image/Images';
const Discount = () => {
  const discount_item = [
    {
      id: 1,
      name: 'vietdepchai',
      description: 'This is discount 1',
      discount: 10,
    },
    {
      id: 2,
      name: 'vietdepchaivl',
      description: 'This is discount 2',
      discount: 20,
    },
  ];
  const [copiedID, setCopiedID] = useState(null);
  const handleCopy = (text, id) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedID(id);
        setTimeout(() => setCopiedID(null), 1500);
      })
      .catch((error) => console.error(error));
  };
  return (
    <DefaultLayout>
      <div className="discount_page">
        <div className="inner">
          <PageTitle title="Discount" />
          <div className="sec-gap discount_coupons">
            <ul className="discount_items">
              {discount_item.map((item, index) => (
                <li key={index} className="discount_item">
                  <div className="discount_img">
                    <img src={Images.voucher} alt="voucher" />
                  </div>
                  <div className="discount_info">
                    <div className="discount_name">{item.name}</div>
                    <div className="discount_desc">{item.description}</div>
                    <div
                      style={{ cursor: 'pointer' }}
                      className="copy_text"
                      onClick={() => handleCopy(item.name, item.id)}
                    >
                      {copiedID === item.id ? 'Đã sao chép!' : 'Sao chép mã'}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
export default Discount;
