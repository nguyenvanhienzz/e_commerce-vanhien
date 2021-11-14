import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, selectItems } from '../../slices/basketSlice';
import featuredData from './featuredData';
import { FaStar } from 'react-icons/fa';
const Max = 5;
const Min = 1;
const IndexFeatureds = ({ title, salePrice, Price, description, imgOne, imgTow, size, imgThree, imgFour, countInStock }) => {
    const [src, setSrc] = useState(imgOne);
    const dispatch = useDispatch();
    const [rating] = useState(
        Math.floor(Math.random() * (Max - Min + 1)) + Min
    );
    const selectItem = useSelector(selectItems);
    const handerClick = () => {
        const product = {
            title,
            imgOne,
            imgTow,
            imgThree,
            imgFour,
            description,
            Price,
            salePrice,
            countInStock,
            size
        }
        dispatch(addToBasket({ ...product, updateSize: 38 }))
    }
    console.log(selectItem)
    return (
        // onClick={() => setId(item.id)}
        // onClick={() => setSrc(index)}
        <div className='row' >
            <div className='image-container'>
                <div className='small-image' >
                    <img src={imgOne} className='featured-image-1' onClick={() => setSrc(imgOne)} />
                    <img src={imgTow} className='featured-image-1' onClick={() => setSrc(imgTow)} />
                    <img src={imgThree} className='featured-image-1' onClick={() => setSrc(imgThree)} />
                    <img src={imgFour} className='featured-image-1' onClick={() => setSrc(imgFour)} />
                </div>
                <div className='big-image'>
                    <img src={src} />
                </div>
                <div className='content'>
                    <h3>{title}</h3>
                    <div className='stars'>
                        {
                            Array(rating)
                                .fill()
                                .map((_, i) => (
                                    <FaStar className='icon-star' />
                                ))
                        }
                    </div>
                    <p>{description}</p>
                    <div className='price'>${salePrice} <span>${Price}</span></div>
                    <button className='btn' onClick={handerClick}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default IndexFeatureds
