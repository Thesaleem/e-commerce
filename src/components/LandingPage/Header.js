import {useDispatch, useSelector} from 'react-redux'
import {Link, useLocation} from "react-router-dom"
import Category from "./Category";
import { productAction } from "../../store/productData";
function Header() {
  const cart = useSelector(state => state.cart)
  const location = useLocation()
  const activeLink = useSelector(state => state.landingPage.selectedLink)
  const dispatch = useDispatch()
  const setLink = (link) => {
    dispatch(productAction.activeLink(link))
  }


  return (
    <>
      <header className="flex justify-between items-center py-8  w-[88%] mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <Link to="/" className="text-2xl">
            CORAL
          </Link>
          <div className="flex md:ml-8">
            <p className="mr-8">
              <Link
                to="/"
                className={`hover:underline ${activeLink === 'men' && location.pathname === '/' ? 'text-gray-500' : 'text-black'}`}
                onClick={() => setLink('men')}
              >
                Men
              </Link>
            </p>
            <p>
              <Link
                to="/"
                className={`hover:underline ${activeLink === 'women' && location.pathname === '/' ? 'text-gray-500' : 'text-black'}`}
                onClick={() => setLink('women')}
              >
                Women
              </Link>
            </p>
          </div>
        </div>
        <div className="flex">
          <p className="mr-4">
            <ion-icon name="person-outline" size="large"></ion-icon>

          </p>
          <p className="relative">
            <Link to='cart'>
            <ion-icon name="bag-outline" size="large"></ion-icon>
            <span className="absolute top-[50%] right-[40%] -translate-y-[40%] lg:-translate-y-1/2 text-[11px]">
              {cart.totalQuantity}
            </span>
            </Link>
          </p>
        </div>
      </header>
      <Category />
    </>
  );
}

export default Header;
