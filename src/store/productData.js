import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    allProducts: [],
    selectedProducts: [],
    selectedLink: 'men',
    isLoading: false
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        chooseProducts(state, action){
            state.allProducts = action.payload.allProducts
            state.selectedProducts = action.payload.selectedProducts
        },
        activeLink(state, action){
            state.selectedLink = action.payload
        },
        setLoading(state, action){
            state.isLoading = action.payload
        }
    }
})

export const fetchProductData = () => {
    return async dispatch => {
        const fetchData = async () => {
            dispatch(productAction.setLoading(true))
            
            const response = await fetch('https://fakestoreapi.com/products')
            if(!response){
                throw new Error (`Couldn't fetch data`)
            }
            const data = response.json() 
            
            dispatch(productAction.setLoading(false))
            return data

        }

        try{
            const productData = await fetchData()
            productData.forEach(product => {
                let words = product.category.split(' ')

                for(let i = 0; i < words.length; i++){
                    words[i] = words[i][0].toUpperCase() + words[i].slice(1)
                }
                product.category = words.join(' ') 
            })

            let selectedProducts = []
            function choose(){
                const n = 6
  
                // // Initial empty array
                // const arr = [];
                
                let randomnumbers = new Set();
                let ans;
                
                // We keep adding elements till
                // size of set is equal to n 
                while (randomnumbers.size < n) {
                
                    // Generating random number 
                    // and adding it
                    randomnumbers.add(Math.floor(
                        Math.random() * 20));
                }

                ans = [...randomnumbers]

                //randomly select the products
                for(let i = 0; i < ans.length; i++){
                    selectedProducts.push(productData[ans[i]])
                    // console.log(randomNum);
                }
                
                return selectedProducts
            }

            choose()
            dispatch(productAction.chooseProducts({
                allProducts: productData,
                selectedProducts,
            }))

        }
        catch(err){

        }
    }
}


export const productAction = productSlice.actions;
export default productSlice