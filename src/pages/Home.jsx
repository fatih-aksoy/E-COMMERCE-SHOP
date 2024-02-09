import React, { useState } from "react";
import SliderComp from "../components/home/SliderComp";
import Sorting from "../components/home/Sorting";
import Category from "../components/home/Category";
import Products from "../components/home/Products";

const Home = () => {
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div>
      <SliderComp />
      {/* //! 3 */}
      <Sorting setSort={setSort} />
      <div className="flex">
        {/* //! 1 */}
        <Category setCategory={setCategory} />
        <Products category={category} sort={sort} />
      </div>
    </div>
  );
};

export default Home;

//! 1 -  Products.jsx den buraya geldik. Category de tikladigim her bolume (electronics, jewelery,men's clothing, women's clothing) tikladigim kismin urunlerinin gelmesini istiyorum. o yuzden Category sayfasina state mi gonderirim ve Category.jsx de bunu props olarak cekerim. Category.jsx e gidelim...

//! 2 -  Category.jsx den buraya geldikten sonra, Products.jsx e   <Products category={category} /> propunu gonderirirz. ve Products.jsx bu propu cekeriz. Products.jsx e gidelim... 3 e hemen gecme

//! 3 - Sorting islemi icin Sorting.jsr e prop gondericez.      <Sorting setSort={setSort} />  Sorting.jsx e gidip propu karsilayalim. DAha sonra filtrelemek istedigm alani, yani sort u da props olarak geceyim. cunku inc ve dec sorting islemi icin bu lazim. birazdan filtreleme islemi yapacagiz.

// ! 4 
