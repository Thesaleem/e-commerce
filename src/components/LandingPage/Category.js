import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import {useState} from 'react'



function Category (){
    const [active, setActive] = useState('')

    const goToLink = (link) => {
        setActive(() => link)
    } 
    const data = useSelector(state => state.landingPage.selectedLink)

    const selectMen = data === 'men'

    let content = [];
    if(selectMen){
        content = [`Men's Clothing`, 'Electronics']
    }
    else {
        content = [`Women's Clothing`,'Jewelery']
    }
    return (
      <ul className="flex justify-center items-center space-x-4  w-[88%] mx-auto">
        {content.map((category) => {
          return (
            <li key={category}>
              
              <Link
                to={`products/${category.toLowerCase()}`}
                className={`hover:underline ${
                  active === category ? "text-gray-500" : "text-black"
                }`}
                onClick={() => goToLink(category)}
              >
                {category}
              </Link>
            </li>
          );
        })}
      </ul>
    );
}

export default Category