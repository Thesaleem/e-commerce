import brand1 from '../../assets/logoipsum-257.svg'
import brand2 from '../../assets/logoipsum-213.svg'
import brand3 from '../../assets/logoipsum-237.svg'
import brand4 from '../../assets/logoipsum-289.svg'
import brand5 from '../../assets/logoipsum-257.svg'



function Brands(){
    return (
        <div className="flex justify-around items-center overflow-hidden lg:py-8  w-[88%] mx-auto">
            <img src={brand1} alt="brand1"  className='w-[50px] md:w-[150px] h-auto object-contain'/>
            <img src={brand2} alt="brand2"  className='w-[50px] md:w-[150px] h-auto object-contain'/>
            <img src={brand3} alt="brand3"  className='w-[50px] md:w-[150px] h-auto object-contain'/>
            <img src={brand4} alt="brand4"  className='w-[50px] md:w-[150px] h-auto object-contain'/>
            <img src={brand5} alt="brand5"  className='w-[50px] md:w-[150px] h-auto object-contain'/>
        </div>
    )
}

export default Brands