/* eslint-disable react/prop-types */
import '../../ProductList/product.scss';
const ProductItem = ({ image, name, price, number }) => {
  return (
    <div className="product_item_wrapper">
      <div className="product_item">
        <div className="product_image">
          <img src={image} alt="product1" />
        </div>
        <div className="product_box">
          <div className="product_box_inner">
            <p
              className="product_name"
              style={{
                fontWeight: '600',
              }}
            >
              {name}
            </p>
            <p className="product_price">{price} </p>
            <p className="product_number" style={{ color: '#ABBBC2' }}>
              {number} Bowls available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductItem;
