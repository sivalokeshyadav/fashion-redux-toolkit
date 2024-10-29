import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store/store";
import { fetchDataUsingThunk } from "../redux/slices/storeSlice";
import CartItem from "../components/CartItem";

const CartPage = () => {
  const cartItems = useSelector(
    (state: RootState) => state.cartSlice.cartItems
  );
console.log("siva",cartItems)
  //const error = useSelector((state: RootState) => state.storeSlice.error);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchDataUsingThunk());
  }, []);
  return (
    <div>
      siva
      <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
                     {cartItems.length > 0
              ? cartItems.map((item:any) => {
                  return <CartItem data={item} />;
                })
              : "Your cart is empty!"}
          </div>
       
    </div>
  );
};

export default CartPage;
