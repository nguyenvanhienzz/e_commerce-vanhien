
import imgOne from '../../../images/f-img-1.1.png'
import imgOne2 from '../../../images/f-img-1.2.png'
import imgOne3 from '../../../images/f-img-1.3.png'
import imgOne4 from '../../../images/f-img-1.4.png'

import imgTow from '../../../images/f-img-2.1.png'
import imgTow2 from '../../../images/f-img-2.2.png'
import imgTow3 from '../../../images/f-img-2.3.png'
import imgTow4 from '../../../images/f-img-2.4.png'

import imgThree from '../../..//images/f-img-3.1.png'
import imgThree2 from '../../../images/f-img-3.2.png'
import imgThree3 from '../../../images/f-img-3.3.png'
import imgThree4 from '../../../images/f-img-3.4.png'
const featuredData = [
    {
        id: 1,
        title: 'New Nike Air Force 1 Crater',
        imgModels: [
            {
                Modes1: [
                    {
                        imgOne: imgOne,
                        imgTow: imgOne2,
                        imgThree: imgOne3,
                        imgFour: imgOne4,
                    }
                ],

            }
        ],
        price: [{ salePrice: 120, Price: 200 }],
        size: ['38', '39', '40', '41', '42'],
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',

        countInStock: 1,
    },
    {
        id: 2,
        title: 'New Kyrie 7',
        imgModels: [
            {
                Modes1: [
                    {
                        imgOne: imgTow,
                        imgTow: imgTow2,
                        imgThree: imgTow3,
                        imgFour: imgTow4,
                    }
                ],

            }
        ],
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
        price: [{ salePrice: 150, Price: 170 }],
        size: ['38', '39', '40', '41', '42'],

        countInStock: 1,
    },
    {
        id: 3,
        title: 'New Nike Air Force 1 Crater FlyKnit',
        imgModels: [
            {
                Modes1: [
                    {
                        imgOne: imgThree,
                        imgTow: imgThree2,
                        imgThree: imgThree3,
                        imgFour: imgThree4,
                    }
                ],

            }
        ],
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
        price: [{ salePrice: 110, Price: 150 }],
        size: ['38', '39', '40', '41', '42'],
        countInStock: 1,
    },
]
export default featuredData;