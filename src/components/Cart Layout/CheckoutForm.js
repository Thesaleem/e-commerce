import {Form, json, redirect, useNavigation} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {cartActions} from '../../store/cartSlice'

function CheckoutForm(){
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const isSubmitting = navigation.state === 'submitting'

    if(isSubmitting){
        dispatch(cartActions.emptyCart([]))
    }

    return (
        <Form method="post" className="w-[88%] mx-auto py-10 font-jost md:flex flex-col items-center">
            <h1 className="pb-4 font-bold">Billing Details</h1>
            <p className="pb-4 flex flex-col md:w-[50%] lg:w-[30%]">
                <label htmlFor="firstname">First Name</label>
                <input type="text" id='firstname' name='firstname' required className= 'border-gray-300 border mt-3 p-1 focus:outline-none w-full' />
            </p>
            <p className="pb-4 flex flex-col md:w-[50%] lg:w-[30%]">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" id='lastname' name='lastname' required className= 'border-gray-300 border mt-3 p-1 focus:outline-none w-full' />
            </p>
            <p className="pb-4 flex flex-col md:w-[50%] lg:w-[30%]">
                <label htmlFor="address">Address</label>
                <input type="text" id='address' name='address' required className= 'border-gray-300 border mt-3 p-1 focus:outline-none w-full' />
            </p>
            <p className="pb-4 flex flex-col md:w-[50%] lg:w-[30%]">
                <label htmlFor="town">Town/City</label>
                <input type="text" id='town' name='town' required className= 'border-gray-300 border mt-3 p-1 focus:outline-none w-full' />
            </p>
            <p className="pb-4 mb-4 flex flex-col md:w-[50%] lg:w-[30%]">
                <label htmlFor="state">State</label>
                <input type="text" id='state' name='state' required className= 'border-gray-300 border mt-3 p-1 focus:outline-none w-full' />
            </p>
            <button className="mt-5 md:mt-0 w-full md:w-[50%] lg:w-[30%]  bg-[#008000ec] text-white py-2 px-16 uppercase font-bold">
                {isSubmitting ? 'Placing Order' : 'Place Order'}
            </button>
        </Form>
    )
}

export default CheckoutForm

export const action = async ({request}) => {

    const data = await request.formData()

    const formData = {
        firstName: data.get('firstname'),
        lastName: data.get('lastname'),
        address: data.get('address'),
        town: data.get('town'),
        state: data.get('state')
    }

    const response = await fetch ('https://react-practice-a064a-default-rtdb.firebaseio.com/billing.json', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(formData)

    })
    if(!response.ok){
        throw json({message: 'Could not place order, please try again'}, {status: 500})
    }

    
    return redirect('/') 

}