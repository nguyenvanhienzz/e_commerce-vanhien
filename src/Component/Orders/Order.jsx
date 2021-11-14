import React from 'react'
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';
import { selectpay } from '../slices/payMent';
import { selectOrder } from '../slices/userSlice';
import './Order.css';

const Order = () => {
    const selectItem = useSelector(selectItems);
    const selectOrders = useSelector(selectOrder);
    const selectpays = useSelector(selectpay);
    return (
        <section className='order'>
            <h1>Orders</h1>
            {selectOrders.length === 0 ? <h2>You don't have any orders yet</h2>
                : selectOrders.map((items, index) => (
                    <div className='order-details' key={index}>
                        {
                            items.map((is) => (
                                <p className='p-time'>{is.dateTime}</p>
                            ))
                        }
                        {items.map((is) => (
                            is.selectItem.map((i) => (
                                <div className='component-order' key={index}>
                                    <img src={i.imgOne} />
                                    <div className='order-title'>
                                        <p>{i.title}</p>
                                        <p>{i.description}</p>
                                        <p>Size:{i.updateSize}</p>
                                        <p>Qty:{i.countInStock}</p>
                                        <p>Price:${i.Price}</p>
                                    </div>
                                </div>))

                        ))}
                        {items.map((is) => (
                            <label >Order Total:${is.sumPrices}</label>
                        ))}
                    </div>
                ))

            }

        </section>
    )
}

export default Order
