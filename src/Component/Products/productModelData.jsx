import React from 'react'
import { FaHeart, FaShare, FaShoppingCart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { AddProductDetails, addToBasket, AddToFavourite } from '../slices/basketSlice';
import './products.css';
const ProductModelData = ({ id,
    title,
    imgOne,
    imgTow,
    imgThree,
    imgFour,
    imgOne2,
    imgTow2,
    imgThree2,
    imgFour2,
    imgOne3,
    imgTow3,
    imgThree3,
    imgFour3,
    salePrice,
    Price,
    size,
    description,
    countInStock,
    colour }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const addItemsToBasket = () => {
        const product = {
            id,
            title,
            imgOne,
            salePrice,
            Price,
            size,
            description,
            countInStock,
            colour,
        };
        dispatch(addToBasket(product))

    };
    const Addtofavourite = () => {
        const product = {
            id,
            title,
            imgOne,
            salePrice,
            Price,
            size,
            description,
            countInStock
        }
        dispatch(AddToFavourite(product))
    };
    const addProductDetails = () => {
        const product = {
            id,
            title,
            imgOne,
            imgTow,
            imgThree,
            imgFour,
            imgOne2,
            imgTow2,
            imgThree2,
            imgFour2,
            imgOne3,
            imgTow3,
            imgThree3,
            imgFour3,
            salePrice,
            Price,
            size,
            description,
            countInStock,
            colour,
        }
        dispatch(AddProductDetails(product));
        history.push('/productdetails');
    };
    console.log();
    return (
        <>
            <div className='product-layout'  >
                <div className='product'>
                    <div className='img-container'>
                        <img src={imgOne} onClick={addProductDetails} />
                    </div>
                    <div className='title'>
                        <div className='icons'>
                            <div className='icon-product'>
                                <FaHeart onClick={Addtofavourite} />
                            </div>
                            <div className='icon-product'>
                                <FaShare />
                            </div>
                            <div className='icon-product'>
                                <FaShoppingCart onClick={addItemsToBasket} />
                            </div>
                        </div>
                        <div className='content'>
                            <h3>{title}</h3>
                        </div>
                        <div className='price'>
                            ${salePrice}<span> ${Price}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductModelData