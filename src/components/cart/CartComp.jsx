import React from "react";
import { removeFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <div className="my-10 flex items-center justify-between">
      <img
        className="w-[150px] h-[150px] object-cover"
        src={cart?.image}
        alt=""
      />
      <div className="w-[476px]">
        <div className="text-xl">{cart?.title}</div>
        <div>{cart?.description}</div>
      </div>
      <div className="font-bold text-2xl">
        {cart?.price} $ ({cart?.quantity})
      </div>
      {/* //! 1*/}
      <div
        onClick={() => dispatch(removeFromCart(cart?.id))}
        className="bg-red-500 text-white w-[150px]h-16 flex text-2xl items-center cursor-pointer justify-center rounded-md"
      >
        Delete Product
      </div>
    </div>
  );
};

export default CartComp;

//! 1 - Total price isleminden sonra artik silme islemini yapacagiz. bu yuzden Delete Product div ine onClick verecegiz. bunun yazdiktan sonra dispatch ile cagiracagiz. silicek. ama total price i da refresh etmeliyiz. removeFromCart dedigimde sayfayi yenilemem gerekiyor.
