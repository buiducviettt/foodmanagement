import ProductItem from './ProductItem';
import Images from '../../assets/image/Images';
const ProductList = () => {
  return (
    <div className="product_list">
      <div className="row">
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
