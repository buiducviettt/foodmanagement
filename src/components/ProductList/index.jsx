import ProductItem from './ProductItem';
import Images from '../../assets/image/Images';
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
const ProductList = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className="product_list">
      <div className="row">
        <div className="col col-4">
          <div className="product_item item">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
              <div className="card-front" onClick={handleClick}>
                <ProductItem
                  image={Images.food1}
                  name="Spicy seasoned seafood noodles"
                  price="$ 2.29"
                  number="20"
                />
              </div>
              <div className="card-back" onClick={handleClick}>
                <h3>Info</h3>
                <p>This is some information on the back of the card!</p>
              </div>
            </ReactCardFlip>
          </div>
        </div>
        <div className="col col-4">
          <div className="product_item item">
            <ProductItem
              image={Images.food2}
              name="Salted Pasta with mushroom sauce"
              price="$ 2.69"
              number="11"
            />
          </div>
        </div>
        <div className="col col-4">
          <div className="product_item item">
            <ProductItem
              image={Images.food3}
              name="Beef dumpling in hot and sour soup"
              price="$ 2.99"
              number="16"
            />
          </div>
        </div>
        <div className="col col-4">
          <div className="product_item item">
            <ProductItem
              image={Images.food3}
              name="Beef dumpling in hot and sour soup"
              price="$ 2.99"
              number="16"
            />
          </div>
        </div>
        <div className="col col-4">
          <div className="product_item item">
            <ProductItem
              image={Images.food3}
              name="Beef dumpling in hot and sour soup"
              price="$ 2.99"
              number="16"
            />
          </div>
        </div>
        <div className="col col-4">
          <div className="product_item item">
            <ProductItem
              image={Images.food3}
              name="Beef dumpling in hot and sour soup"
              price="$ 2.99"
              number="16"
            />
          </div>
        </div>
        <div className="col col-4">
          <div className="product_item item">
            <ProductItem
              image={Images.food3}
              name="Beef dumpling in hot and sour soup"
              price="$ 2.99"
              number="16"
            />
          </div>
        </div>
        <div className="col col-4">
          <div className="product_item item">
            <ProductItem
              image={Images.food1}
              name="Spicy seasoned seafood noodles"
              price="$ 2.29"
              number="20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductList;
