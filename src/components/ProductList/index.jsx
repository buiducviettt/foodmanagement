import ProductItem from './ProductItem';
// import Images from '../../assets/image/Images';
import ReactCardFlip from 'react-card-flip';
import { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { getProducts } from '../../api';
const ProductList = ({ value }) => {
  // Quản lý trạng thái flip cho từng sản phẩm
  const [flippedItems, setFlippedItems] = useState([]);
  const { addToCart } = useCart();

  // Danh sách sản phẩm
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  // xử lý add to cart
  const handleAddToCart = (e, product) => {
    addToCart(product);
    e.stopPropagation();
    console.log('Product added to cart:', product);
    if (product.stock <= 0) {
      alert('Out of stock');
    }
  };

  // Xử lý khi click vào sản phẩm
  const handleClick = (id) => {
    setFlippedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };
  return (
    <div className="product_list">
      <div className="row">
        {products
          .filter((product) => value === 'all' || product.cate === value)
          .map((product) => (
            <div className="col col-4" key={product.id}>
              <div className="product_item item">
                <ReactCardFlip
                  isFlipped={flippedItems.includes(product.id)}
                  flipDirection="horizontal"
                >
                  {/* Mặt trước */}
                  <div
                    className="card-front"
                    onClick={() => handleClick(product.id)}
                  >
                    <ProductItem
                      image={product.image}
                      name={product.title}
                      price={product.price}
                      number={product.stock}
                    />
                  </div>
                  {/* Mặt sau */}
                  <div
                    className="card-back"
                    onClick={() => handleClick(product.id)}
                  >
                    <div className="card_back_content">
                      <h3>Info</h3>
                      <p>{product.description}</p>
                    </div>
                    <div className="product_cart_item">
                      <div
                        className="btnn --pri btnn_addcart"
                        onClick={(e) => handleAddToCart(e, product)}
                      >
                        Order now
                      </div>
                    </div>
                  </div>
                </ReactCardFlip>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
