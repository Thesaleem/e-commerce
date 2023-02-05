import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Hero from "./LandingPage/Hero";
import Brands from "./LandingPage/Brands";
import ProductSection from "./LandingPage/ProductSection";
import Showcase from "./LandingPage/Showcase";
import Footer from "./LandingPage/Footer";
import { fetchProductData } from '../store/productData';
import LoadingSpinner from './UI/LoadingSpinner';

function LandingPage(){

    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.landingPage.isLoading)
    const data = useSelector(state => state.landingPage.selectedProducts)
    

    useEffect(() => {
        dispatch(fetchProductData())
    }, [dispatch])



    return (
        <>
            {isLoading && <LoadingSpinner />}
            {!isLoading && 
            <>
            <Hero />
            <Brands />
            <ProductSection data= {data}/>
            <Showcase />
            <Footer />
            </>
            
            }
        </>
    )
}

export default LandingPage