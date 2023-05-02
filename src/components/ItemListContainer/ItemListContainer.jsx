import { useEffect, useState } from "react"
import { getProductByCategory, getProducts } from "../../asyncMock"
import { useParams } from 'react-router-dom'
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({greeting}) => {

    const [products, setproducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setproducts(response)
            })
            .catch(error => {
                console.log(error)
            })
    
    }, [categoryId]) 

    return(
        <div>
            <br />
            <h2>{greeting}</h2>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer