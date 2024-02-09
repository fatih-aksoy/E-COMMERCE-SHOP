import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import CartComp from "../components/cart/CartComp";

const Cart = () => {
  // ! 1
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);

  console.log(carts, totalAmount, itemCount, "carts");

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  return (
    <div>
      {carts?.length > 0 ? (
        <div>
          {carts?.map((cart, i) => (
            <CartComp key={i} cart={cart} />
          ))}
          <div className="flex items-center justify-end text-2xl ">
            TOTAL PRICE:
            <span className="font-bold text-3xl ml-2">
              {totalAmount.toFixed(2)} $
            </span>
          </div>
        </div>
      ) : (
        <div>Cart is empty...</div>
      )}
    </div>
  );
};

export default Cart;

//! 1 - silme islminde sayfanin guncellenmesini istiyorum. cunku urun silinince total prrice ben manuel yenilemeden otomatik yenilenmeli. bunu da cons location=useLocation ile yapariz.

// ! Search islemi icin pages folder da ,Search.jsx olusuturup bu component e gidelim...
