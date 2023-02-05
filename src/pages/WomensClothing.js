import {json, useLoaderData, useNavigation} from 'react-router-dom'
import Products from '../components/LandingPage/Products'
import LoadingSpinner from '../components/UI/LoadingSpinner'


function WomensClothing(){
    const navigation = useNavigation()
    const isLoading = navigation.state === 'loading'
    const data = useLoaderData()
    
    return (     
        <>
            {isLoading ? <LoadingSpinner /> : <Products data ={data}/>}
        </>
    )
    
}

export default WomensClothing


export const loader = async () => {
    const category = `women's clothing`
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    if(!response.ok){
        throw json({message: 'Could not fetch data'}, {status: 500})
    }
    return response
}