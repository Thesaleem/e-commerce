import { Link } from 'react-router-dom'

function Products(props){
    // console.log(props.data);
    const content = props.data.map(product => {
        return (
            <Link to={`/products/${product.id + ''}`} key={product.id} id={product.id} className="w-[300px] mb-6 mt-4">
                <div className=" w-full h-[404px] ">
                    <img src={product.image} alt={product.description} className="w-full h-full object-contain"  />
                </div>
                <div className="min-h-[50px] pt-2 pb-3 text-sm">
                    <p className="">{product.title}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-[#4a4a4a]">{product.category}</p>
                    <p className="font-semibold">£{`${product.price.toFixed(2)}`}</p>
                </div>
            </Link>
        )
    })
    return (
        <div className="flex justify-evenly flex-wrap font-jost  w-[88%] mx-auto">
            {content}
        </div>
    )
}

export default Products