import './banner.css';
import React, { useState } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { FaShippingFast, FaHeadset, FaUndo } from 'react-icons/fa';
import bannerData from './bannerData';
import { useHistory } from 'react-router';

const Banner = ({ side }) => {
    const [current, setCurrent] = useState(0);
    const length = side.length;
    const history = useHistory();
    const prev = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    const next = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    if (!Array.isArray(side) || side.length <= 0) {
        return null
    }
    return (
        <>
            <section className='home'>
                {
                    bannerData.map((item, index) => (
                        <div className={index === current ? 'slide-container active' : 'slide-container'} key={index}>
                            <div className='slide'>
                                <div className='content'>
                                    <span>{item.span}</span>
                                    <h3>{item.h3}</h3>
                                    <p>{item.p}</p>
                                    <button className='btn' onClick={() => history.push('/product')}>
                                        {item.button}
                                    </button>
                                </div>
                                <div className='image'>
                                    <img src={item.Imgone} className='shoe' />
                                    <img src={item.Imgtow} className='text' />
                                </div>
                            </div>

                        </div>

                    ))
                }

                <IoIosArrowBack className='prev' onClick={prev} />
                <IoIosArrowForward className='next' onClick={next} />
            </section>

            <section className='service'>
                <div className='box-contaniner'>
                    <div className='box'>
                        <FaShippingFast className='fa-icon' />
                        <h3>Fst Dedivery</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable.</p>
                    </div>
                    <div className='box'>
                        <FaUndo className='fa-icon' />
                        <h3>10 Days Replacements</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable.</p>
                    </div>
                    <div className='box'>
                        <FaHeadset className='fa-icon' />
                        <h3>24 x 7 Support</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner
