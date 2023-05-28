import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import ItemList from "../ItemList/ItemList"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const ItemListContainer = ({greeting}) => {

    const [products, setproducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')
        
        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setproducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId]) 

    return(
        <div>
            <br />
            <h2>{greeting}</h2>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <ItemList products={products} />
            )}
        </div>
    )
}

export default ItemListContainer