import React from 'react';
import './NewReleases.css';
const NewReleases = () => {
    return (
        <div className='new-releases'>
            <div className='releases-banner'>
                <img src='https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1237,c_limit/e28c6414-8796-4391-b549-470844a3e25e/jordan.jpg' />
            </div>
            <div className='treanding-now'>
                <h1>TRENDING NOW</h1>
                <div className='treanding-img'>
                    <img src='https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1237,c_limit/0b9fdb5f-ad80-4f60-9abc-dbd9b6ed9b9d/jordan.jpg' />
                    <div className='treanding-text'>
                        <h2>WINTER COATS</h2>
                        <p>Stay warm and look good all winter in coats with windproof, waterproof fabrics, insulating layers, and customizable fits.</p>
                    </div>
                </div>
            </div>
            <div className='jordan-men'>
                <h1>JORDAN MEN</h1>
                <div className='jordan-img'>
                    <img src='https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1237,c_limit/bdfbc79c-59c3-4fb7-9296-ad5246cdcfc7/jordan.jpg' />
                </div>
            </div>
            <div className='jordan-women'>
                <h1>JORDAN WOMEN</h1>
                <div className='jordan-img'>
                    <img src='https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1237,c_limit/5fa5a278-edd9-4fdd-9124-d69abc2af891/jordan.jpg' />
                </div>
            </div>
            <div className='jordan-kids'>
                <h1>JORDAN KIDS</h1>
                <div className='jordan-img'>
                    <img src='https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1237,c_limit/2091ab26-7549-4e04-a772-4899ccc44a2c/jordan.jpg' />
                </div>
            </div>
        </div>
    )
}

export default NewReleases
