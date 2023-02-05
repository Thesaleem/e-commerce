import {useDispatch, useSelector} from 'react-redux'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { cartActions } from '../store/cartSlice'
import {useState} from 'react'


function ProductDetails (){
    const navigate = useNavigate()
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()
    const { productid } = useParams()
    const data = useSelector(state => state.landingPage.allProducts.find(product => product.id === +productid))
    const {id, title, price, image} = data
    
    const increase = () => {
        setQuantity(prev => prev + 1)
    }
    const decrease = () => {
        if(quantity === 1) return;
        setQuantity(prev => prev - 1)
    }

    const addToCart = () => {
        dispatch(cartActions.addProduct({
            id,
            title,
            price,
            quantity,
            image,
            totalPrice: quantity * price,
        }))
        navigate('/cart')
    }

    return (
        <div className="w-[88%] font-jost mx-auto flex flex-col justify-center items-start md:flex-row">
            <div className=" h-[649px] md:w-[40%] lg:w-[480px] pt-10">
                <img src={data.image} alt="cloth" className="w-full h-full object-contain"/>
            </div>
            <div className="w-full md:mt-40 md:ml-20 md:w-[50%] lg:w-[30%] ">
                <div className="font-jost text-lg">
                    <p className='py-3'>{data.title}</p>
                    <p className='font-semibold py-3'>£{`${data.price.toFixed(2)}`}</p>
                </div>
                <div className="flex flex-col items-center md:flex-row md:justify-between md:items-end">
                    <div className="flex border-gray-300 border">
                        <button onClick={decrease} className="bg-gray-200 py-1 px-3">-</button>
                        <input type="text" value={quantity} readOnly className="w-[40px] text-center" />
                        <button onClick={increase} className="bg-gray-200 py-1 px-3">+</button>   
                    </div>

                    <button className='mt-5 w-[85%] md:mt-0 md:w-auto md:ml-auto bg-black text-white py-2 px-16'>
                        <Link to='/cart' onClick={addToCart}>
                            Add to Bag
                        </Link>
                    </button>
                </div>
                <div className="mt-8 py-2 border-gray-300 border">
                    <i className="fa fa-truck pl-3" aria-hidden="true"></i>
                    <span className='ml-4'>Free Delivery.</span>
                    <p className='ml-9 pt-3 pl-3'>Ts&Cs apply.</p>

                    <hr className='border-gray-300 border my-4' />
                    <p className='text-sm underline pb-3  pl-3'>This product has shipping restricions</p>
                
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
