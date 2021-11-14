import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Removes, selectItems } from '../../slices/basketSlice';
import { selectpay } from '../../slices/payMent';
import '../DetailsCheckout/DetailsCheckout.css';
import { useHistory } from 'react-router';
import { Orders } from '../../slices/userSlice';

const PayPal = () => {
    const selectItem = useSelector(selectItems);
    const history = useHistory();
    const dispatch = useDispatch();
    const selectpays = useSelector(selectpay);
    const sumPrice = selectItem.reduce((total, item) => total + Math.round(parseFloat(item.Price) * item.countInStock), 0);
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
    useEffect(() => {
        window.paypal.Buttons({
            style: {
                shape: 'pill',
                layout: 'horizontal',
                height: 40
            },
            conmit: true,
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: 'CAPTURE',
                    purchase_units: [{
                        amount: {
                            currency_code: "CAD",
                            value: sumPrice + selectpays.Tax + selectpays.shippingFee,
                        }
                    }]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                console.log(order);
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
            },
            onError: (err) => {
                console.log(err)
            }
        }).render('#pay-btn')
    }, [])
    return (
        <div id='pay-btn'></div >
    )
}

export default PayPal
