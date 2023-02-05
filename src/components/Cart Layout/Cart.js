import CartItems from "./CartItems";
import EmptyCart from "./EmptyCart";
import { useSelector} from 'react-redux'


function Cart() {
    const cart = useSelector(state => state.cart)

    return (
        <>
        {cart.isEmpty ? <EmptyCart /> : <CartItems />}
        </>
    )
}

export default Cart;
