import './assets/ItemList.css';
import Item from '../Item/Item';

const ItemList = ({products}) => {

    if (!Array.isArray(products)) {
        return <div>La variable products no es un array</div>
    }

    return(
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 card-deck">
            {products.map(prod => <Item key={prod.id}{...prod}/>)}
        </div>
    )
}

export default ItemList