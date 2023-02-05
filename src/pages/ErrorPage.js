import { useRouteError } from "react-router-dom";
import Header from "../components/LandingPage/Header";
import errorImage from '../assets/page_not_found.svg'

function ErrorPage(){
    const error = useRouteError()

    let title = 'An error occured'
    let message = 'Something went wrong!'

    if(error.status === 500){
        message = error.data.message
    }
    if(error.status === 404){
        message = 'Could  not find Page'
    }
    return (
        <>
        <Header />
        <div className="h-[80vh] border border-[red]">
            <div className="font-jost flex flex-col-reverse lg:flex-row justify-center items-center pt-6 border border-[red]">
                <div className="">
                    <h1 className="text-8xl">Oops!</h1>
                    <h1 className="py-3 text-2xl">{title}</h1>
                    <p className="text-2xl"> {message}</p>
                </div>
                <div className="w-[40%] mb-10 lg:mb-0 lg:ml-40">
                    <img src={errorImage} alt="error notice" className="w-full" />
                </div>
            </div>
        </div>
        </>

    )
}

export default ErrorPage