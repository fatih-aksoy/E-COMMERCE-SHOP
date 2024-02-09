import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const DetailComp = ({ productDetail }) => {
  //! 1
  //! 2
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const increment = () => {
    if (quantity < productDetail?.rating?.count) setQuantity(quantity + 1);
  };

  const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        price: productDetail?.price,
        quantity: quantity,
      })
    );
  };

  return (
    <div className="flex gap-10 my-10 ">
      <img
        className="w-[700px] h-[500px] object-cover"
        src={productDetail?.image}
        alt=""
      />
      <div className="">
        <div className="text-4xl font-bold">{productDetail?.title}</div>
        <div className="my-2 text-2xl">{productDetail?.description}</div>
        <div className="my-2 text-xl text-red-500">
          Rating : {productDetail?.rating?.rate}
        </div>
        <div className="my-2 text-xl text-red-500">
          Count {productDetail?.rating?.count}
        </div>
        <div className="text-5xl font-bold">
          {productDetail?.price} <span className="text-sm">$</span>
        </div>
        <div className="flex items-center gap-5 my-4">
          <div onClick={decrement} className="text-5xl cursor-pointer">
            -
          </div>
          <input
            className="w-12 text-center text-2xl font-bold"
            type="text"
            value={quantity}
          />
          <div onClick={increment} className="text-4xl cursor-pointer">
            +
          </div>
        </div>
        <div
          onClick={addBasket}
          className="border w-[200px] h-16 flex items-center text-2xl bg-gray-200 cursor-pointer rounded-md justify-center my-4"
        >
          Add to Cart
        </div>
      </div>
    </div>
  );
};

export default DetailComp;

// ! 1 - quantity islemlerinden once sayfanin CSS i ile ugrastik. ondan sonra add To Chart bolumunun quantity kismi ile ugrasmaliyiz. state ti kurdugumuzda, input tag in valur suna {quantity} yazariz. sonrasinda "-" ve "+" onClick={decrement} ve onClick={increment} verilir. if kosulu yazilir, eger quantity 0 dan buyukse quantity i azalt. boylece quantity eksi degere inmez. artirken de count taki kadar yani stokctaki (120) ye kadar quantity i arttirabilirsin. bundan sonra artik add to cart ile sepet teki adet numarasini ayarlicaz. bunun icin  <div>Add to Cart</div> tag ina onClick yazariz. tabi sepet uzerindeki sayinin degismesi icin redux folder da cartSlice.js acariz. cartSlice.js e gidelim... 2 ye hemen gecme

//! 2 - cartSlice.js getCartTotal isleminden sonra urunleri Cart a eklemek icin buraya geliriz. const addToChart = () => {dispatch(ad)}; yazip artik urunleri buraya ekleyecegiz. icini hangi verileri istedgimiz yazacigz ve buradan NavbarRight.jsx e gidelim...
