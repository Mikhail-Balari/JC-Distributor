import './assets/ItemList.css';
import Item from '../Item/Item';

const ItemList = ({products}) => {

    return(
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 card-deck">
            {products.map(prod => <Item key={prod.id}{...prod}/>)}
        </div>
    )
}

export default ItemList