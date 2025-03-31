import ProductItem from './ProductItem';
import Images from '../../assets/image/Images';
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
import { useCart } from '../../context/CartContext';

const ProductList = () => {
  // Quản lý trạng thái flip cho từng sản phẩm
  const [flippedItems, setFlippedItems] = useState([]);
  const { addToCart } = useCart();

  // Danh sách sản phẩm
  const products = [
    {
      id: 1,
      image: Images.food1,
      name: 'Spicy seasoned seafood noodles',
      price: '2.29',
      number: '20',
      backcontent: 'Spicy seasoned seafood noodles is the best food ',
    },
    {
      id: 2,
      image: Images.food2,
      name: 'Salted Pasta with mushroom sauce',
      price: '2.69',
      number: '11',
      backcontent: 'Salted Pasta with mushroom sauce is the best food ',
    },
    {
      id: 3,
      image: Images.food3,
      name: 'Beef dumpling in hot and sour soup',
      price: ' 2.99',
      number: '16',
      backcontent: 'Beef dumpling in hot and sour soup is the best food ',
    },
    {
      id: 4,
      image: Images.food3,
      name: 'Beef dumpling in hot and sour soup',
      price: ' 2.99',
      number: '16',
      backcontent: 'Beef dumpling in hot and sour soup is the best food ',
    },
    {
      id: 5,
      image: Images.food3,
      name: 'Beef dumpling in hot and sour soup',
      price: ' 2.99',
      number: '16',
      backcontent: 'Beef dumpling in hot and sour soup is the best food ',
    },
    {
      id: 6,
      image: Images.food3,
      name: 'Beef dumpling in hot and sour soup',
      price: '2.99',
      number: '16',
      backcontent: 'Beef dumpling in hot and sour soup is the best food ',
    },
    {
      id: 7,
      image: Images.food3,
      name: 'Beef dumpling in hot and sour soup',
      price: ' 2.99',
      number: '16',
      backcontent: 'Beef dumpling in hot and sour soup is the best food ',
    },
    {
      id: 8,
      image: Images.food1,
      name: 'Spicy seasoned seafood noodles',
      price: ' 2.29',
      number: '20',
      backcontent: 'Beef dumpling in hot and sour soup is the best food ',
    },
  ];
  // xử lý add to cart
  const handleAddToCart = (e, product) => {
    addToCart(product);
    e.stopPropagation();
    console.log('Product added to cart:', product);
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
        {products.map((product) => (
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
                    name={product.name}
                    price={product.price}
                    number={product.number}
                  />
                </div>
                {/* Mặt sau */}
                <div
                  className="card-back"
                  onClick={() => handleClick(product.id)}
                >
                  <div className="card_back_content">
                    <h3>Info</h3>
                    <p>{product.backcontent}</p>
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
