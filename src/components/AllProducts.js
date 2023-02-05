import Products from "./LandingPage/Products"
import {useSelector} from 'react-redux'

function AllProducts (){

    const data = useSelector(state => state.landingPage.allProducts)

    return (
        <Products data={data} />
    )
}

export default AllProducts