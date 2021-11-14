import './footer.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <section className='footer'>
            <div className='box-container'>
                <div className='box'>
                    <h3>Our stores</h3>
                    <Link className='link'>India</Link>
                    <Link className='link'>USA</Link>
                    <Link className='link'>Japan</Link>
                    <Link className='link'>Paris</Link>
                </div>
                <div className='box'>
                    <h3>Quick links</h3>
                    <Link className='link'>Home</Link>
                    <Link className='link'>Product</Link>
                    <Link className='link'>Featured</Link>
                    <Link className='link'>Review</Link>
                </div>
                <div className='box'>
                    <h3>Extra links</h3>
                    <Link className='link'>My Account</Link>
                    <Link className='link'>My Favorite</Link>
                    <Link className='link'>My Order</Link>
                    <Link className='link'>New Sletter</Link>
                </div>
                <div className='box'>
                    <h3>Follow us</h3>
                    <Link className='link'>Facebook</Link>
                    <Link className='link'>Twitter</Link>
                    <Link className='link'>Instagram</Link>
                    <Link className='link'>Linkein</Link>
                </div>
                <div className='credit'>Created by <span>mr.van hien</span> | All right reserved </div>
            </div>
        </section>
    )
}

export default Footer
