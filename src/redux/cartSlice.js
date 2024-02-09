import { createSlice } from "@reduxjs/toolkit";
//! 1

const fetchFromLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const storeInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
  // localStorage.setItem("cart", JSON.stringify());
};

const initialState = {
  carts: fetchFromLocalStorage(),
  itemCount: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isItemCart = state.carts.find(
        (item) => item.id === action.payload.id
      );
      //! 01:48:00-01:53:00
      if (isItemCart) {
        const tempCart = state.carts.map((item) => {
          if (item.id === action.payload.id) {
            let tempQty = item.quantity + action.payload.quantity;
            let tempTotalPrice = tempQty + item.price;
            return { ...item, quantity: tempQty, totalPrice: tempTotalPrice };
          } else {
            return item;
          }
        });
        //! 2
        state.carts = tempCart;
        storeInLocalStorage(state.carts);
      } else {
        state.carts.push(action.payload);
        storeInLocalStorage(state.carts);
      }
    },

    //! 3
    removeFromCart: (state, action) => {
      const tempCart = state.carts.filter((item) => item.id !== action.payload);
      state.carts = tempCart;
      storeInLocalStorage(state.carts);
    },
    //! 4
    clearCart: (state) => {
      state.carts = [];
      storeInLocalStorage(state.carts);
    },
    //! 5
    getCartTotal: (state) => {
      state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
        return (cartTotal = cartTotal + cartItem.price * cartItem.quantity);
      }, 0);
      state.itemCount = state.carts.length;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, getCartTotal } =
  cartSlice.actions;
export default cartSlice.reducer;

//! 1 - DetailComp.jsx de adet sayacini ayrlayi sepet uzerindeki sayi icin buraya geldim. initial state de toplam urun hesaplama, miktar hesaplama yailacak ve hepsi burada yazilacak. her birini farkli react sayfalarinda yapmaktansa burda yapmak daha mantikli. burda cart icindeki verileri local storage uzerinden alacagim.

//! localStorage ile islerimi const fetchFromLocalStorage=()=>{} burda yapacagim. her set ettigim seyi, yani onclick yaptigimda, localStorage uzerinden alacagim ve JSON.parse() yaparak return edecegim. if(cart), eger kartim varsa... eger yoksa "else" ....

//! const storeInLocalStorage=(data)=>{} disaridan bir veri, data alir. gelen veri uzerinden JSON.stringify kullanarak bunlari harekete gecirecegimlocalStorage.setItem('cart',JSON.stringify()), neyi kaydedicem, disaridan gelen "data" verileri localStorage ye kaydeden bir fonksiyon.

//! const cartSlice = createSlice({}) icinde reducer yazarken dikkatli olmam gerekwn bir kisim var; burda API den veri cekmeyecegim icin EXTRA REDUCERS yazmaya GEREKI YOK!!

//! addToCart kisminda sunu bilelim. bur urun cart a eklendi ise tekrar o urun eklenmez, sayisini arttirirsin. state.carts.find(item=>item.id); state.carts uzerinden bul, neyi find edeceksin? her bir elemani tek tek gezeceksin (item=>item.id), her bir gezdigin elemanin id degeri action.payload.id yani sana disarindangelen id degeri ile esit olup olmadigini kontrol et. bunlari bul find et. yani ayni urunu ekrana koy veya koyma misali dusunebiliriz. Ama eger if(isItemCart) varsa... hesaplama notlarini yaz....!!!!

//! 2 - hesaplama kodlarini yazdiktan sonra...      storeInLocalStorage(state.carts), burada set leme islemi yapariz. bu if(isItemCart) oldugunda gecerli. Ya olmazsa napicez???

//! eger olmazsa,  else {state.carts.push(action.payload)storeInLocalStorage(state.carts)}

//! 3 - Karttan silme islemi: her silme isleminde local storage yi guncelleyecegiz. storeInLocalStorage(state.carts);

//! 4 - Eger tum karti temizlemek istersem action a ve filter() a gerek yok. direk [] ile ici temizlenecek.

//! getCartTotal isleminden sonra artik tikladigimda  urunleri cart a yukleyecegim. bunun icin DetailCom.jsx e gider ve dispatch islemine baslariz. DetailComp.jsx e gidelim.

// ! ...item demek once butun itemleri dön.

// ! COK ONEMLI

// !const storeInLocalStorage = (data) => {
//   !localStorage.setItem("cart", JSON.stringify(data));
//   // localStorage.setItem("cart", JSON.stringify());
//! };  bu kisim hata verdi ve cozumu asagida.

// !consoledan application kısmına gelip oradan local storage bölümünden ilgili veriyi silip sayfayarefresh at hocam.
