const products = [
    {
        id: '1',
        name: 'Mesa Cuadrada',
        price: 12000,
        category: 'Comedor',
        img: './mesa.webp',
        stock: 10,
        description: 'Mesa de pino cuadrada de 1,40 x 1,40.'
    },
    {
        id: '2',
        name: 'Silla Hindú',
        price: 2500,
        category: 'Comedor',
        img: './silla.jpg',
        stock: 20,
        description: 'Silla de comedor con respaldo de palitos.'
    },
    {
        id: '3',
        name: 'Futón de Tres Cuerpos',
        price: 35000,
        category: 'Living',
        img: './futon.jpg',
        stock: 5,
        description: 'Futón de tres cuerpos desmontable para cama.'
    },
    {
        id: '4',
        name: 'Cama de Dos Plazas',
        price: 28000,
        category: 'Dormitorio',
        img: './cama.jpg',
        stock: 7,
        description: 'Cama de dos plazas con cabecera torneada.'
    },
    {
        id: '5',
        name: 'Rack de TV',
        price: 8500,
        category: 'Comedor',
        img: './rack.jpg',
        stock: 15,
        description: 'Rack para TV de madera con cajones y estantes.'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}
