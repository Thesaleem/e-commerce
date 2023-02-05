import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import {Link} from 'react-router-dom'

function CartItems(){
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const cartItems = cart.cartItems;
    const totalAmount = cart.totalAmount;
    const increaseQuantity = (id) => {
      dispatch(cartActions.increaseInCart(id));
    };
  
    const decreaseQuantity = (id) => {
      dispatch(cartActions.reduceInCart(id));
    };
    const removeItem = (id) => {
      dispatch(cartActions.removeFromCart(id));
    };
    const content = cartItems.map((item) => {
      return (
        <div key={item.id} id={item.id} className="mt-4">
          <div className=" relative flex items-start justify-between">
            <div className="w-[28%] min-h-[140px] ">
              <img src={item.image} alt={item.title} className="w-full" />
            </div>
            <div className="flex flex-col justify-between w-[65%] min-h-[188px] ">
              <p className="font-semibold pt-3">£{item.price.toFixed(2)}</p>
              <p className="py-3">{item.title}</p>
  
              <div className="inline-flex justify-between items-start ">
                <div className="flex  border-gray-300 border">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-gray-200 py-1 px-3"
                  >
                    -
                  </button>
                  <p className=" py-1 px-3">{item.quantity}</p>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-gray-200 py-1 px-3"
                  >
                    +
                  </button>
                </div>
  
                <div className="">
                  <p className="font-bold text-sm pt-3">
                    £{item.totalPrice.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
            <span
              onClick={() => removeItem(item.id)}
              className="cursor-pointer absolute top-1 right-1 text-lg"
            >
              &#120;
            </span>
          </div>
          <hr className="border-gray-300 border mt-4" />
        </div>
      );
    });
  
    return (
      <div className="flex flex-col md:flex-row justify-center md:items-start font-jost w-[88%] mx-auto mt-8 py-8 ">
        <div className=" md:w-[40%]">
          <div className=" text-lg font-bold py-4 px-6 border border-gray-300">
            <p>My Bag</p>
          </div>
  
          <div className="py-4 px-6 mt-4 border border-gray-300">{content}</div>
  
          <div className="text-sm font-bold flex justify-end mt-4 py-4 px-6 border border-gray-300">
            <p>SUB-TOTAL</p>
            <p className="ml-7">£{totalAmount.toFixed(2)}</p>
          </div>
        </div>
  
        <div className="md:w-[25%] md:ml-14 py-4 px-6 border border-gray-300 h-auto">
          <p className="text-lg font-bold ">Total</p>
          <hr className="border-gray-300 border my-4" />
          <div className="flex justify-between">
            <p className="font-semibold">Sub-total</p>
            <p>£{totalAmount.toFixed(2)}</p>
          </div>
          <div className="flex justify-between mt-2">
            <p className="font-semibold ">Delivery</p>
            <p>Free</p>
          </div>
          <hr className="border-gray-300 border my-4" />
          <Link to='/checkout'>
            <button className="mt-5 md:mt-0 w-full bg-[#008000ec] text-white py-2 px-16 uppercase font-bold">
                Checkout
            </button>
          </Link>
        </div>
      </div>
    );
}

export default CartItems