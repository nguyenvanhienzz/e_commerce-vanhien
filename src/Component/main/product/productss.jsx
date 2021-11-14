import { FaHeart, FaShare, FaEye, FaStar } from 'react-icons/fa';
import { useState } from 'react';
import { addToBasket, selectItems } from '../../slices/basketSlice';
import { useDispatch, useSelector } from 'react-redux';
const Max = 5;
const Min = 1;

const Productss = ({ imgOne, salePrice, Price, title, description, countInStock, size }) => {
    const dispatch = useDispatch();
    const handerClick = () => {
        const product = {
            title,
            imgOne,
            salePrice,
            Price,
            description,
            countInStock,
            size
        }
        dispatch(addToBasket({ ...product, updateSize: 38 }))
    }
    const [rating] = useState(
        Math.floor(Math.random() * (Max - Min + 1)) + Min
    );
    return (
        <>
            <div className='box'>
                <div className='icons'>
                    <div className='icon-product'>
                        <FaHeart />
                    </div>
                    <div className='icon-product'>
                        <FaShare />
                    </div>
                    <div className='icon-product'>
                        <FaEye />
                    </div>
                </div>
                <img src={imgOne} />
                <div className='content'>
                    <h3>{title}</h3>
                    <div className='price'>
                        ${salePrice} <span> ${Price}</span>
                    </div>
                    <div className='starts'>
                        {
                            Array(rating)
                                .fill()
                                .map((_, i) => (
                                    <FaStar className='icon-star' />
                                ))
                        }
                    </div>
                    <button className='btn' onClick={handerClick}>
                        Add to cart
                    </button>
                </div>
            </div>

        </>
    )
}

export default Productss

