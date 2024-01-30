export const navMenu = [
    {link: '/', title: 'Главная'},
    {link: '/SquadNeeds', title: 'Отрядные нужды'},
    {link: '/rules', title: 'Правила безоасности'},
    {link: '/address', title: 'Адрес'},
    {link: '/contacts', title: 'Контакты'},
    {link: '/about', title: 'О нас'},
]
// Отрядные нужды
interface Item {
    li: string;
    link: string;
}

interface Container {
    title: string;
    ul: Item[];
}

export const tents: Container[] = [
    {
       title: 'Палатки',
       ul: [
            {
                li: 'Палатка кемпинговая четырехместная LANYU LY-1909',
                link: 'https://clck.ru/34YmVQ'
            },
            {
                li: 'Палатка 4-местная Forshina ART1002-4',
                link: 'https://clck.ru/34YmfS'
            },
            {
                li: 'Палатка кемпинговая четырехместная LANYU LY-1699',
                link: 'https://clck.ru/34YmgM'
            }
       ] 
    },
]

export const backpacks = [
    {
        title: 'Рюкзаки',
        ul: [
            {
                li: 'Рюкзак тактический Sabado 35 литров',
                link: 'https://clck.ru/34Yn7c'
            },
            {
                li: 'Рюкзак туристический Eveveme Водонепроницаемый Backpack Bag, 80л',
                link: 'https://clck.ru/34Yn7o'
            },
            {
                li: 'Трекинговый рюкзак RedFox Light 100 V5',
                link: 'https://clck.ru/34Yn8F'
            },
            {
                li: 'Трекинговый рюкзак ECOS Knight 55',
                link: 'https://clck.ru/34Yn8x'
            }
        ] 
    },
]
export const cloth = [
    {
        title: 'Одежда',
        ul: [
            {
                li: 'Костюм Kamukamu ВКБО ВКПО',
                link: 'https://clck.ru/34YnEL'
            },
            {
                li: 'Вейдерсы Nordman ПС 15 ПК',
                link: 'https://clck.ru/34YnEf'
            }
        ] 
    },
]
export const tools = [
    {
        title: 'Инструменты',
        ul: [
            {
                li: 'Набор походный туристический для выживания MyPads 18 в 1',
                link: 'https://clck.ru/34YnJv'
            },
            {
                li: 'Вейдерсы Nordman ПС 15 ПК',
                link: 'https://clck.ru/34YnEf'
            }
        ] 
    },
]