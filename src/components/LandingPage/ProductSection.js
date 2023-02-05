import Products from "./Products"

function ProductSection(props){
    return (
        <div className="">
            <h1 className="text-center font-roboto text-3xl lg:text-4xl font-semibold pt-8 pb-10">New Products</h1>
            <Products data={props.data}/>
        </div>
    )
}

export default ProductSection