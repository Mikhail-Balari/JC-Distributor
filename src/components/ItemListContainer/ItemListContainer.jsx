import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({greeting}) => {

    const [products, setproducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(response => {
                setproducts(response)
            })
            .catch(error => {
                console.log(error)
            })
    
    }, []) 

    return(
        <div>
            <br />
            <h2>{greeting}</h2>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer