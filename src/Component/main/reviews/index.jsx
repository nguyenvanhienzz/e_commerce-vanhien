import './review.css';
import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';
import reviewData from './reviewData';
const Max = 5;
const Min = 1;
const Review = () => {
    const [rating] = useState(
        Math.floor(Math.random() * (Max - Min + 1)) + Min
    );
    return (
        <section className='review'>
            <h1 className='heading'>Customer's <span>Review</span></h1>
            <div className='box-container'>
                {
                    reviewData.map((item, index) => (
                        <div className='box' key={index}>
                            <img src={item.image} />
                            <h3>{item.title}</h3>
                            <p>{item.decreation}</p>
                            <div className='stars'>
                                {
                                    Array(rating)
                                        .fill()
                                        .map((_, i) => (
                                            <FaStar className='icon-star' />
                                        ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Review
