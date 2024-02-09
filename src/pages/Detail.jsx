import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailProduct } from "../redux/productSlice";
import DetailComp from "../components/detail/DetailComp";
import Loading from "../components/Loading";

//! 1
const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetailStatus, productDetail } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch, id]);

  console.log(productDetail, "productDetail");

  return (
    <div>
      {productDetailStatus === "LOADING" ? (
        <Loading />
      ) : (
        <DetailComp productDetail={productDetail} />
      )}
    </div>
  );
};

export default Detail;

//! 1 - burada yukaridan id gelecek ve bunu useParams ile yakalayacagim. burda urunleri cekecegim.  const {productDetailStatus,productDetail}=useSelector() bu veriler productSlice.js den geliyor. productSlice.js deki export const getDetailProduct degiskenindeki id lazim bana. useEffect ile  useEffect(() => { dispatch(getDetailProduct(id));}, [dispatch]); cagiracam. her detaylar sayfasina gittigimde, gelen id numarasina gore veriler degistigi icin, bu id parametresinin [dispatch,id] buraya bagli olmasi gerekir. sonra detailleri gormek icin onClick event i vericez. bunun icin Produdct.jsx e gidelim...
