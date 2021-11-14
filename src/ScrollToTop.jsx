import React, { useEffect, useState } from 'react'
import { IoIosArrowDropup } from 'react-icons/io'
import './App.css';
const ScrollToTop = () => {
    const [isVisable, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.pageYOffset > 400) {
            setIsVisible(true);
        } else {
            setIsVisible(false)
        }
    }
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])
    return (
        <div className='scroll-top'>
            <button onClick={scrollTop} className={isVisable ? 'opacity-100' : 'opacity-0'}><IoIosArrowDropup className='icon-fill' /></button>
        </div>
    )
}

export default ScrollToTop
