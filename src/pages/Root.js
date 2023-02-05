import Header from "../components/LandingPage/Header"
import {Outlet} from 'react-router-dom'

function Root(){
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Root