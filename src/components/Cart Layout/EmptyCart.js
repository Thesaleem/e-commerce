import {Link} from 'react-router-dom'

function EmptyCart(){

    return (
        <div className="font-jost absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center">
                <div className="pt-4 pb-3">
                    <ion-icon name="bag-outline" size="large"></ion-icon>
                </div>
                <p className="pb-6">Your bag is empty</p>
                <Link to='/products'>
                    <button className="mt-5 md:mt-0 w-full bg-[#008000ec] text-white py-2 px-16 uppercase font-bold">
                    Let's go shopping!
                    </button>
                </Link>

            </div>
        </div>
    )
}

export default EmptyCart