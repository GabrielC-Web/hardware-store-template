import { icons, logos } from "src/assets/images/image-routes";

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
    }
}