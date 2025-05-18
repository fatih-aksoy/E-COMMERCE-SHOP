import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const NavbarRight = () => {
  // !
  //! 1
  const dispatch = useDispatch();
  // const { carts } = useSelector((state) => state.carts);
  //! 2
  const { itemCount } = useSelector((state) => state.carts);
  const navigate = useNavigate();

  // ! TEST harfe gore search islemi
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  // ! TEST harfe gore search islemi

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    <div className="flex items-center gap-8">
      <div className="flex items-center border p-3 rounded-full bg-gray-200">
        <input
          className="bg-gray-200 outline-none"
          type="text"
          placeholder="Search product..."
          onChange={handleChange}
        />
        <FaSearch size={28} />
      </div>
      <CiHeart size={28} />
      <div onClick={() => navigate("cart")} className="relative">
        <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
          {itemCount}
        </div>
        <SlBasket size={28} />
      </div>
    </div>
  );
};

export default NavbarRight;

//! 1 e hemen gitme

//! 1 -  burada basket icindeki miktar a ulacagiz. dispatch i cagir. useEffect() ile sayfa yuklendiginde, dispatch ile getCartTotal() i cagir. bunlar aktif olarak calismasi icin store.js ye gidicem. stoje.js ye gidelim.

//! 2 -  store.js den tekrar buraya geldik. useSelector hook unu cagiririz.
