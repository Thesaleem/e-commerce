import hero from '../../assets/image_2.jpg'
import maleHero from '../../assets/image_1.jpg'
import { useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'

function Hero(){

  const navigate = useNavigate()

  const nav = () => {
    navigate('/products')
  }
  const data = useSelector(state => state.landingPage.selectedLink)
    return (
      <div className="py-10 relative">
        <img src={data === 'men'? maleHero : hero} alt="hero" className="w-full"/>
        <div className="text-white absolute left-4 top-20 sm:top-40 sm:left-8 md:left-16 lg:left-20 md:top-32 lg:top-52 w-[40%] md:w-[30%]">
          <h3 className="text-[13px] sm:text-[24px] md:text-[28px] lg:text-[50px] lg:leading-[1] mb-1 lg:mb-6">
            True Venice Tradition
          </h3>
          <p className="text-[8px] sm:text-[14px] md:text-[16px] lg:text-2xl lg:leading-9">
            You Can Explore And Shop Many Different Collection From Various
            Brands Here.
          </p>

          <button onClick={nav} className="text-[10px] hover:opacity-75 md:text-[18px] lg:text-xl border border-white md:py-3 py-1 px-4 lg:py-4 lg:mt-8 md:px-7 rounded-md md:rounded-xl mt-4">
              Shop Now
          </button>
        </div>
      </div>
    );
}

export default Hero