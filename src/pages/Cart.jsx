import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../redux/cartSlice";
import CartComp from "../components/cart/CartComp";

export default function Cart() {
  const dispatch = useDispatch();
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);
  console.log(carts,totalAmount,itemCount, "carts");
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  return (
    <div>
      {carts?.length > 0 ? (
        <div>
          {carts.map((cart, i) => (
            <CartComp key={i} cart={cart} />
            
          ))}
          <div className="flex items-center justify-end  text-2xl">
            TOTAL:<span className="font-bold text-3xl  ml-2">{totalAmount}$</span>
          </div>
          
        </div>
        
      ) : (
        <div className="text-red-500 text-center font-bold text-5xl">Sepetiniz boş lütfen bir ürün ekleyin!</div>
      )}
    </div>
  );
}
