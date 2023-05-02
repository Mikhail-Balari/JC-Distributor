import './assets/ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, img, category, description, price, stock}) => {

    return(
        <article className='CardItem card'>
            <header className='Header card-header'>
                <h2 className='ItemHeader'>{name}</h2>
            </header>
            <picture className='card-img-top'>
                <img src={img} alt={name} className='ItemImg' />
            </picture>
            <section className='card-body'>
                <p className='Info card-text'>Categoria: {category}</p>
                <p className='Info card-text'>Descripción: {description}</p>
                <p className='Info card-text'>Precio: ${price}</p>
            </section>
            <footer className='ItemFooter card-footer'>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) =>console.log('Cantidad Agregada ') }/>
            </footer>
        </article>
    )
}

export default ItemDetail
