import React from 'react';
import { addToBasket, AddToFavourite, RemoveOneBasket, removeToBasket, selectfavourite, selectItems, UpdateToBasket } from '../slices/basketSlice';
import './Checkout.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const Checkout = () => {
    const selectItem = useSelector(selectItems);
    const dispatch = useDispatch();
    const selectFavourite = useSelector(selectfavourite);
    const sumPrice = selectItem.reduce((total, item) => total + Math.round(parseFloat(item.Price) * item.countInStock), 0);
    const sumItem = selectItem.reduce((total, item) => total + item.countInStock, 0);
    const history = useHistory();
    const removeBasket = (id, imgOne, updateSize) => {
        selectItem.forEach((item) => {
            if (item.id === id && item.imgOne === imgOne) {
                dispatch(removeToBasket({ id, imgOne, updateSize }))
            }
        })
    }
    const Addtofavourite = (id, imgOne, updateSize) => {
        selectItem.forEach((item) => {
            if (item.id === id && item.imgOne === imgOne) {
                dispatch(AddToFavourite({ ...item, countInStock: 1, updateSize: 38 }))
                dispatch(removeToBasket({ id, imgOne, updateSize }))
            }
        })
    }

    const Addtocart = (id, imgOne) => {
        selectFavourite.forEach((item) => {
            if (item.id === id && item.imgOne === imgOne) {
                dispatch(addToBasket({ ...item }))
            }

        })
    }
    const reduction = (id, imgOne, updateSize) => {
        selectItem.forEach((item) => {
            if (item.id === id && item.imgOne === imgOne && item.updateSize === updateSize) {
                dispatch(RemoveOneBasket({ ...item }))
            }

        })
    }
    const increase = (id, imgOne, updateSize, countInStock) => {
        selectItem.forEach((item) => {
            if (item.id === id && item.imgOne === imgOne && item.updateSize === updateSize) {
                dispatch(addToBasket({ ...item }))
            }
            if (countInStock === 10) {
                alert('Bạn đã đạt  đến số lượng giới hạn của sản phẩm');
            }
        })
    }
    const updatesizes = (sizes) => {
        selectItem.forEach((item) => {
            dispatch(UpdateToBasket({ ...item, updateSize: sizes }))
        })

    }

    return (
        <div>

            <section className='checkout'>
                <div className='checkoutLeft'>
                    <h2>{selectItem.length == 0 ? 'Your Nike Cart is empty.' : 'Shopping Cart'}</h2>
                    <span></span>
                    {selectItem.map((item, index) => (
                        <div className='checkoutItems' key={index}>
                            <div className='img-item'>
                                <img src={item.imgOne} />
                            </div>
                            <div className='checkout-title'>
                                <div className='checkout-h3'>
                                    <h3>{item.title}</h3>
                                    <h3>${item.Price}</h3>
                                </div>
                                <p>{item.description}</p>
                                <div className='label'>
                                    <div className='label-size'>
                                        <label>Size</label>
                                        <select value={item.updateSize} onChange={(e) => updatesizes(e.target.value)}>
                                            {item.size.map((size) => (
                                                <option value={size} onChange={(e) => updatesizes(e.target.value)}>{size}</option>
                                            ))}
                                        </select>

                                    </div>
                                    <div className='label-Quantity'>
                                        <button className='btn-' onClick={() => reduction(item.id, item.imgOne, item.updateSize)}>-</button>
                                        <p className='countInStock'>{item.countInStock}</p>
                                        <button className='btn11' onClick={() => increase(item.id, item.imgOne, item.updateSize, item.countInStock)}>+</button>
                                    </div>
                                    <div className='favourites' onClick={() => Addtofavourite(item.id, item.imgOne, item.updateSize)}>Add to favourite</div>
                                    <div className='checkout-remove' onClick={() => removeBasket(item.id, item.imgOne, item.updateSize)}>
                                        <p>Remove</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    ))}

                    <p className={selectItem.length > 0 ? 'price' : 'price-none'}>Subtotal({sumItem} item):<span>${sumPrice}</span></p>
                </div>
                <div className='checkoutRight' >
                    <p>Subtotal({sumItem} item):<span>${sumPrice}</span></p>
                    <button
                        disabled={selectItem.length > 0 ? '' : 'disabled'}
                        onClick={() => history.push('/detailscheckout')}
                        className={selectItem.length > 0 ? 'checkout-btn' : 'btn-none'}>
                        Proceed to checkout</button>
                </div>
            </section >
            <section className={selectFavourite != '' ? 'checkout-favourites' : 'favourites-none'}>
                <h3 className='favourite-h3'>Favourites</h3>
                <div className='favourites-main' >
                    {selectFavourite.map((item, index) => (

                        <div className='list-favourite' key={index}>
                            <div className='favourites-left'>
                                <img src={item.imgOne} />
                                <div className='favourites-context'>
                                    <p>{item.title}</p>
                                    <button onClick={() => Addtocart(item.id, item.imgOne)}> Add to cart</button>
                                </div>
                            </div>
                            <div className='favourites-right'>
                                ${item.Price}
                            </div>
                        </div>

                    ))}
                </div>
                <p className='gotofavourite' onClick={() => history.push('/favourite')}>Go To Favourite </p>
            </section>

        </div >
    )
}
export default Checkout
