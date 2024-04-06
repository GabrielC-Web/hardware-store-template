import { icons, logos, products } from "src/assets/images/image-routes";

/**
 * Objeto con data cableada para toda la plantilla
 */
export const mainData = {
    mainLogo: logos.carServ,
    navBar: {
        buttons: {
            favourites: {
                image: icons.heart,
                text: 'Favoritos'
            },
            kart: {
                image: icons.kart,
                text: 'Carrito de compras'
            }
        },
        menus: {
            buttons: [
                {
                    text: 'Todos',
                    route: '',
                    matMenus: [
                        'Componentes',
                        'Dirección',
                        'Suspensión',
                        'Transmisión',
                        'Aceite'
                    ]
                },
                {
                    text: 'Promociones',
                    route: '',
                    matMenus: [
                        'Componentes',
                        'Dirección',
                        'Suspensión',
                        'Transmisión',
                        'Aceite'
                    ]
                },
                {
                    text: 'Mantenimiento',
                    route: '',
                    matMenus: [
                        'Componentes',
                        'Dirección',
                        'Suspensión',
                        'Transmisión',
                        'Aceite'
                    ]
                },
                {
                    text: 'Exterior',
                    route: '',
                    matMenus: [
                        'Componentes',
                        'Dirección',
                        'Suspensión',
                        'Transmisión',
                        'Aceite'
                    ]
                },
                {
                    text: 'Motor',
                    route: '',
                    matMenus: [
                        'Componentes',
                        'Dirección',
                        'Suspensión',
                        'Transmisión',
                        'Aceite'
                    ]
                },
                {
                    text: 'Tren Motriz',
                    route: '',
                    matMenus: [
                        'Componentes',
                        'Dirección',
                        'Suspensión',
                        'Transmisión',
                        'Aceite'
                    ]
                },
                {
                    text: 'Eléctricas',
                    route: '',
                    matMenus: [
                        'Componentes',
                        'Dirección',
                        'Suspensión',
                        'Transmisión',
                        'Aceite'
                    ]
                },
                {
                    text: 'Refrigeración',
                    route: '',
                    matMenus: [
                        'Componentes',
                        'Dirección',
                        'Suspensión',
                        'Transmisión',
                        'Aceite'
                    ]
                },
                {
                    text: 'Interior',
                    route: '',
                    matMenus: [
                        'Componentes',
                        'Dirección',
                        'Suspensión',
                        'Transmisión',
                        'Aceite'
                    ]
                },
            ]
        }
    },
    productsModule: {
        products: {
            count: 30,
            items: [
                {
                    img: products.sparePart1,
                    productName: 'GENERAL MOTORS',
                    brandName: 'Refrigerante Dex Cool Importado',
                    originalPrice: 'Ref.23.00',
                    discountPrice: 'Ref.22.00'
                },
                {
                    img: products.sparePart2,
                    productName: 'GENERAL MOTORS',
                    brandName: 'Refrigerante Dex Cool Importado',
                    originalPrice: 'Ref.23.00',
                    discountPrice: 'Ref.22.00'
                },
                {
                    img: products.sparePart3,
                    productName: 'GENERAL MOTORS',
                    brandName: 'Refrigerante Dex Cool Importado',
                    originalPrice: 'Ref.23.00',
                    discountPrice: 'Ref.22.00'
                },
                {
                    img: products.sparePart4,
                    productName: 'GENERAL MOTORS',
                    brandName: 'Refrigerante Dex Cool Importado',
                    originalPrice: 'Ref.23.00',
                    discountPrice: 'Ref.22.00'
                },
                {
                    img: products.sparePart5,
                    productName: 'GENERAL MOTORS',
                    brandName: 'Refrigerante Dex Cool Importado',
                    originalPrice: 'Ref.23.00',
                    discountPrice: 'Ref.22.00'
                },
                {
                    img: products.sparePart6,
                    productName: 'GENERAL MOTORS',
                    brandName: 'Refrigerante Dex Cool Importado',
                    originalPrice: 'Ref.23.00',
                    discountPrice: 'Ref.22.00'
                },
                {
                    img: products.sparePart7,
                    productName: 'GENERAL MOTORS',
                    brandName: 'Refrigerante Dex Cool Importado',
                    originalPrice: 'Ref.23.00',
                    discountPrice: 'Ref.22.00'
                },
                {
                    img: products.sparePart8,
                    productName: 'GENERAL MOTORS',
                    brandName: 'Refrigerante Dex Cool Importado',
                    originalPrice: 'Ref.23.00',
                    discountPrice: 'Ref.22.00'
                },
                {
                    img: products.sparePart9,
                    productName: 'GENERAL MOTORS',
                    brandName: 'Refrigerante Dex Cool Importado',
                    originalPrice: 'Ref.23.00',
                    discountPrice: 'Ref.22.00'
                },
                {
                    img: products.sparePart2,
                    productName: 'GENERAL MOTORS',
                    brandName: 'Refrigerante Dex Cool Importado',
                    originalPrice: 'Ref.23.00',
                    discountPrice: 'Ref.22.00'
                },
                {
                    img: products.sparePart1,
                    productName: 'GENERAL MOTORS',
                    brandName: 'Refrigerante Dex Cool Importado',
                    originalPrice: 'Ref.23.00',
                    discountPrice: 'Ref.22.00'
                },
                {
                    img: products.sparePart5,
                    productName: 'GENERAL MOTORS',
                    brandName: 'Refrigerante Dex Cool Importado',
                    originalPrice: 'Ref.23.00',
                    discountPrice: 'Ref.22.00'
                },
            ]
        },
        sidenav: {
            categorieTypes: [
                {
                    name: 'Todos'
                },
                {
                    name: 'Promociones'
                },
                {
                    name: 'Mantenimiento'
                },
                {
                    name: 'Exterior'
                },
                {
                    name: 'Motor'
                },
                {
                    name: 'Tren Motriz',
                    children: [
                        {
                            name: 'Componentes'
                        },
                        {
                            name: 'Dirección'
                        },
                        {
                            name: 'Suspensión'
                        },
                        {
                            name: 'Transmisión'
                        },
                        {
                            name: 'Aceite'
                        }
                    ]
                },
                {
                    name: 'Eléctricas'
                },
                {
                    name: 'Refrigeración'
                },
                {
                    name: 'Interior'
                },
            ]
        }
    }
}