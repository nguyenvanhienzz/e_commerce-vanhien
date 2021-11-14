import React, { useState } from 'react'
import { IoBagOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { addToBasket, Removes, selectItems } from '../../slices/basketSlice';
import { paymentDetails, selectpay } from '../../slices/payMent';
import { Orders } from '../../slices/userSlice';
import PayMents from '../PayMents/PayMents';
import PayPal from '../PayMents/PayPal';
import YourCart from '../YourCarts/YourCart';
import './DetailsCheckout.css';

const DetailsCheckout = () => {
    const selectItem = useSelector(selectItems);
    const selectpays = useSelector(selectpay);
    const dispatch = useDispatch();
    const [states, setStates] = useState({
        shippingAddress: false,
        shippingSpeed: false
    });
    const sumPrice = selectItem.reduce((total, item) => total + Math.round(parseFloat(item.Price) * item.countInStock), 0);

    const [shippingSpeeds, setShippingSpeeds] = useState('Free Shipping');
    var today = new Date();
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    var times = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const days = () => {
        var day = today.getDay();
        switch (day) {
            case 0:
                day = 'Sunday'
                break;
            case 1:
                day = 'Monday'
                break;
            case 2:
                day = 'Tuesday'
                break;
            case 3:
                day = 'Wednesday'
                break;
            case 4:
                day = 'Thursday'
                break;
            case 5:
                day = 'Friday'
                break;
            case 6:
                day = 'Saturday'
                break;
            default:
                break;
        }
        return day;
    }
    var dateTime = days() + ' ' + date + ',' + times;
    const sumlength = selectItem.reduce((total, item) => total + item.countInStock, 0);
    const history = useHistory();
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        address: '',
        email: '',
        phonenumber: '',
        check: false
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });

    }

    const validateInfo = () => {
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        let errors = {};
        if (!values.firstname.trim()) {
            errors.firstname = 'Pleace enter a first name';
        }
        if (!values.lastname.trim()) {
            errors.lastname = 'Pleace enter last name';
        }
        if (!values.address.trim()) {
            errors.address = 'Pleace enter  address';
        }
        if (!values.email.trim()) {
            errors.email = 'Pleace enter email';
        } else if (!filter.test(values.email)) {
            errors.email = 'Invalid email';
        }
        if (!values.phonenumber.trim()) {
            errors.phonenumber = 'Pleace enter phone number';
        } else if (!vnf_regex.test(values.phonenumber)) {
            errors.phonenumber = 'Invalid phone number';
        }
        return errors;
    }

    const val = validateInfo();
    const handerContinue = () => {
        setErrors(validateInfo())
        if (Object.keys(val).length > 0) {
            setStates({ ...states, shippingAddress: false });
        } else {
            setStates({ ...states, shippingAddress: true });
            dispatch(paymentDetails(values));
        }
    }
    const handerShipSpeer = () => {
        var shippingFee = 0
        var Tax = 0;
        shippingSpeeds ? setStates({ ...states, shippingSpeed: true }) : setStates({ ...states, shippingSpeed: false })
        if (shippingSpeeds === 'Free Shipping' || shippingSpeeds === 'Free No Rush Shipping') {
            shippingFee = 0;
            Tax = 0;
        } else if (shippingSpeeds === '$15.00 Shipping') {
            shippingFee = 15;
            Tax = 1.2;
        } else {
            shippingFee = 25;
            Tax = 2;
        }
        dispatch(paymentDetails({ shippingFee, Tax }));
    }

    const handerOrder = () => {
        const pro = [
            {
                selectItem,
                dateTime,
                sumPrices: sumPrice + selectpays.Tax + selectpays.shippingFee,
            }

        ]
        dispatch(Orders(pro));
        dispatch(Removes());
        history.push('/order');
    }
    return (
        <>
            <div className='details-checkout'>
                <header className='check-header'>
                    <img src='https://brandlogos.net/wp-content/uploads/2020/11/nike-swoosh-logo-512x512.png' onClick={() => history.push('/')} />
                    <IoBagOutline className='icon' onClick={() => history.push('/checkout')} />
                    <span className={sumlength > 9 ? 'span9' : 'span'}>{sumlength > 9 ? '9+' : sumlength}</span>
                </header>
                <main>
                    <h1>CHECKOUT</h1>
                    <div className='customer-information'>
                        <div className='main-checkout'>
                            <div>
                                <div className='checkouts'>
                                    <div className='delivery-options'>
                                        <h2>1. DELIVERY OPTIONS <span className={!states.shippingSpeed ? 'edit-h2-none' : 'edit-h2'} onClick={() => { setStates({ ...states, shippingSpeed: false }); dispatch(paymentDetails({ check: false })); }} >Edit</span></h2>
                                        {states.shippingAddress ? <div className={states.shippingAddress ? 'shipment-none' : 'shipment'}>
                                            <div className='shipment-address'>
                                                <p >Shipping Address</p><span onClick={() => setStates({ ...states, shippingAddress: false })} className={states.shippingSpeed ? 'edits-none' : 'edits'}>Edit</span>
                                            </div>
                                            <p>Fullname:{values.firstname} {values.lastname}</p>
                                            <p>Address:{values.address}</p>
                                            <p>Email:{values.email}</p>
                                            <p>Phonenumber:{values.phonenumber}</p>
                                        </div>
                                            : <div className='shipment-details'>
                                                <div className='first-last'>
                                                    <div>
                                                        <fieldset>
                                                            <legend>First Name</legend>
                                                            <input type='text' name="firstname" value={values.firstname} placeholder='First name' onChange={handleChange} />
                                                        </fieldset>
                                                        <p>{errors.firstname}</p>
                                                    </div>
                                                    <div>
                                                        <fieldset>
                                                            <legend>Last Name</legend>
                                                            <input type='text' name="lastname" value={values.lastname} placeholder='Last name' onChange={handleChange} />
                                                        </fieldset>
                                                        <p>{errors.lastname}</p>
                                                    </div>
                                                </div>
                                                <div className='address'>
                                                    <div>
                                                        <fieldset>
                                                            <legend>Address</legend>
                                                            <input type='text' name="address" value={values.address} placeholder='Address' onChange={handleChange} />
                                                        </fieldset>
                                                        <p className='err-address'>{errors.address}</p>
                                                    </div>
                                                </div>
                                                <div className='contact'>
                                                    <div>
                                                        <fieldset>
                                                            <legend>Email</legend>
                                                            <input type='email' name="email" value={values.email} placeholder='Email' onChange={handleChange} />
                                                        </fieldset>
                                                        <p>{errors.email}</p>
                                                    </div>
                                                    <div>
                                                        <fieldset>
                                                            <legend>Phone Number</legend>
                                                            <input type='text' name="phonenumber" value={values.phonenumber} placeholder='Phone number' onChange={handleChange} />
                                                        </fieldset>
                                                        <p>{errors.phonenumber}</p>
                                                    </div>
                                                </div>
                                                <button onClick={handerContinue}>Save & Continue</button>
                                            </div>
                                        }

                                    </div>
                                    {states.shippingSpeed ? <div className='select-speed'>
                                        <p>Shipping Speed</p>
                                        <p className='select-text'>{shippingSpeeds}</p>
                                    </div>
                                        : states.shippingAddress ? <div className='select-shippings'>
                                            <h3>SELECT YOUR SHIPPING SPEED</h3>
                                            <div className='shipping-speed'>
                                                <div className='radio-label'>
                                                    <label>
                                                        <input type='radio' name='shippings' value='Free No Rush Shipping' onChange={(e) => setShippingSpeeds(e.target.value)} checked={shippingSpeeds === 'Free No Rush Shipping' ? 'true' : ''} />
                                                        <div className='radio-shipping'></div>
                                                        Free No Rush Shipping,
                                                    </label>
                                                </div>
                                                <div className='radio-label'>
                                                    <label >
                                                        <input type='radio' name='shippings' value='Free Shipping' onChange={(e) => setShippingSpeeds(e.target.value)} checked={shippingSpeeds === 'Free Shipping' ? 'true' : ''} />
                                                        <div className='radio-shipping'></div>
                                                        Free Shipping,
                                                    </label>
                                                </div>

                                                <div className='radio-label'>
                                                    <label >
                                                        <input type='radio' name='shippings' value='$15.00 Shipping' onChange={(e) => setShippingSpeeds(e.target.value)} checked={shippingSpeeds === '$15.00 Shipping' ? 'true' : ''} />
                                                        <div className='radio-shipping'></div>
                                                        $15.00 Shipping,
                                                    </label>
                                                </div>

                                                <div className='radio-label'>
                                                    <label >
                                                        <input type='radio' name='shippings' value='$25.00 Shipping' onChange={(e) => setShippingSpeeds(e.target.value)} checked={shippingSpeeds === '$25.00 Shipping' ? 'true' : ''} />
                                                        <div className='radio-shipping'></div>
                                                        $25.00 Shipping,

                                                    </label>
                                                </div>
                                            </div>
                                            <button onClick={handerShipSpeer}>Continue to Payment</button>
                                        </div> : ''}
                                </div>
                                <div className='ships-pay'>
                                    {states.shippingSpeed ?
                                        <PayMents /> : <h2>2. PAYMENT </h2>
                                    }
                                </div>
                                <div className='order-pay'>
                                    {selectpays !== null && selectpays.check && states.shippingAddress && states.shippingSpeed ?
                                        <>
                                            <h2>3. ORDER REVIEW</h2>
                                            <p>By clicking the "Place Order" button, you confirm that you have read, understand, and accept our Terms of Use, Terms of Sale, Privacy Policy, and Return Policy.</p>
                                            {selectpays !== null && selectpays.paymemt === 'paypal' ? <PayPal className='pay-btn' /> : <button onClick={handerOrder}>Order</button>}
                                        </>
                                        :
                                        <h2>3. ORDER REVIEW</h2>
                                    }
                                </div>
                            </div>
                            <div >
                                <YourCart />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default DetailsCheckout
