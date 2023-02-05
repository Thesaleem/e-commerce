import image from '../../assets/unsplash.png'
import logo from '../../assets/Zara_Logo.png'
import { useNavigate} from 'react-router-dom'


function Showcase(){

  const navigate = useNavigate()

  const nav = () => {
    navigate('/products')
  }

    return (
      <div className="">
        <div className="relative">
          <img src={image} alt="zara brand" />
          <div className="text-white font-roboto absolute text-[7px] bottom-7 right-7 w-[35%] md:text-lg md:bottom-14 md:right-14 md:w-[35%] lg:text-2xl lg:bottom-28 lg:right-28 lg:w-[30%] md:leading-10">
            <img
              src={logo}
              alt="zara logo"
              className="py-3 md:py-8 w-12 md:w-auto"
            />
            <p>
              The new evening wear collection exclusively offered at the
              reopened Giorgio Armani boutique in Los Angeles.
            </p>
            <button onClick={nav} className="hover:opacity-75 mt-3 py-1 px-2 md:mt-10 md:py-3 md:px-6 bg-white text-black md:rounded-md">  
                See Collection
            </button>
          </div>
        </div>
      </div>
    );
}

export default Showcase