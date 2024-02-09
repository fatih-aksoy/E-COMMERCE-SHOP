import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./containers/PageContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Search from "./pages/Search";

// ! Detail i, Proje devam ederken, proje zamaninin ortasinda yazabiliriz.

function App() {
  return (
    <div>
      <PageContainer>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products:search" element={<Search />} />
          </Routes>
        </Router>
      </PageContainer>
    </div>
  );
}
//! 1
export default App;

//! 1 Detail.jsx basta da olusturulabilir. Ama biz Products.jsx de inc, dec, sort() isleminden sonra Details.jsx i olusturduk. urunu secip id sinden urun detail lere gidecegiz. simdi Detail.jsx e gidelim. 2 ye hemen gecme.

//! 2 Search.jsx e rafce yapinca buray gelir App.js de Route olarak yazariz. bunun icin redux folder icinde searchSlice.js comp u olusturalim.
