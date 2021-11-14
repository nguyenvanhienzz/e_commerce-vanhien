import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { selectItems } from '../../slices/basketSlice';
import { selectpay } from '../../slices/payMent';
import './YourCart.css';

const YourCart = () => {
    const selectItem = useSelector(selectItems);
    const selectpays = useSelector(selectpay);
    const history = useHistory();
    const sumPrice = selectItem.reduce((total, item) => total + Math.round(parseFloat(item.Price) * item.countInStock), 0);
    return (
        <div className='your-cart'>
            <h2>IN YOUR CART <span onClick={() => history.push('/checkout')}>Edit</span></h2>
            <div className='total'>
                <p>Subtotal<span>${sumPrice}</span></p>
                <p>Estimated Shipping<span>${selectpays !== null && selectpays.shippingFee ? selectpays.shippingFee : 0.00}</span></p>
                <p>Estimated Tax<span>${selectpays !== null && selectpays.Tax ? selectpays.Tax : 0.00} </span></p>
                <p className='total-p'>TOTAL<span>${selectpays !== null && selectpays.Tax ? sumPrice + selectpays.shippingFee + selectpays.Tax : sumPrice}</span></p>
            </div>
            <div className='product-total'>
                {selectItem.map((item) => (
                    <div className='your-product'>
                        <div>
                            <img src={item.imgOne} />
                        </div>
                        <div className='your-text'>
                            <p className='your-title'>{item.title}</p>
                            <p>Size:{item.updateSize}</p>
                            <p>Qty:{item.countInStock} @ ${item.Price}</p>
                            <p>Total:${item.Price * item.countInStock}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default YourCart
