import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryProducts, getProducts } from "../../redux/productSlice";
import Product from "./Product";
import Loading from "../Loading";
import ReactPaginate from "react-paginate";

const Products = ({ category, sort }) => {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products);
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  //! 1

  // console.log(products, "products");
  console.log(sort, "sort");
  //! 4
  useEffect(() => {
    if (category) {
      // dispatch(getProducts());
      //! 5
      dispatch(getCategoryProducts(category));
    } else {
      dispatch(getProducts());
    }
    dispatch(getProducts());
    // }, [dispatch]);
  }, [dispatch, category]);

  console.log(products, "products");

  return (
    <div>
      {productsStatus === "LOADING" ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-wrap">
            {/* //! 2 */}
            {/* {products?.map((product, i) => ( */}
            {/* //! 6 */}
            {/* {currentItems?.map((product, i) => (
              <Product key={i} product={product} />
            ))} */}
            {currentItems
              ?.sort((a, b) =>
                sort === "inc"
                  ? a.price - b.price
                  : sort === "dec"
                  ? b.price - a.price
                  : ""
              )
              ?.map((product, i) => (
                <Product key={i} product={product} />
              ))}
          </div>
          <ReactPaginate
            className="paginate"
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </>
      )}
    </div>
  );
};
//! 3
export default Products;

//! 1 - useSelector((state) => state.products) burdaki products store.js den geliyor.

//! 2 - paginate islemi icin burada npm paginate sitesine code yapistirtik.  const currentItems = products.slice(itemOffset, endOffset) kod satirindan dolayi artik  {products?.map((product, i) => (...) kismi artik {currentItems?.map((product, i) => (...) diye degisicek.

//! 3 - burada paginate isleminden sonra Home.jsx sayfasina gidip Category islemine, ve sorting islemine bakacagiz... Home.jsx e gidelim.

//! 4 - Home.jsx den Product.jsx icin category={category} propunu buraya gonderip cektikden sonra, burada benim useEffect im category e gore calissin. artik sayfa yuklendigin de category deki degere gore veri almak istiyorum. useEffect(() => {dispatch(getProducts())}, [dispatch, category]); artik useEffect e category yi ekleriz. ilk once gelen veri "getProducts()" tum verileri getirsin ama bana category e gore de urun getirsin. simdi burada bir if dongusu kuracagiz. if calisin ya tun runler veya category urunleri getirsin. bunun icin produtSlice.js e gidelim... 5. maddeye hemen gecme.

//! 5 - Products.js den buraya geldik ve if durumunu duzeltecegiz. 6 ya hemen gecme.

//! 6 - simdi burada sort() islemi yapicaz inc ve dec durumu icin. sort () ileminiden once map in ilk halini burada kullandik ve simdi yoruma aldik. ya yoruma alir yeni map yazariz, ya da var olna map() in yanina sort() islemini de ekleriz. artik Detail sayfasini olusturucaz. App.jsx sayfasina gidelim. Detail.jsx root olusturucaz.
