import React from 'react';
import './Wings.css';
const Wings = () => {
    return (
        <div className='wing'>
            <div className='wing-banner'>
                <img src='https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1349,c_limit/e409f4cf-348e-4880-bcf4-a563d3458de1/the-jordan-brand-wings-youth-programs.jpg' />
            </div>
            <div className='wing-text'>
                <h1>OUR PURPOSE IS TO CREATE
                    <br />INSPIRATION AND ACCESS THAT HELPS
                    <br />
                    YOUTH CREATE A BETTER FUTURE.
                </h1>
                <p>
                    We believe the ball should bounce the same for everyone and that education and access
                    <br />
                    have the power to promote diversity, inclusion and equality.
                    <br />
                    <br />

                    Jordan Brand isn't just what you wear or how you play. It's the confidence to find your voice,
                    <br />
                    own your style, and change the game both on and off the court. Driven by the legacy of Michael
                    <br />
                    Jordan, we inspire the world to achieve greatness on their own terms.
                </p>

            </div>
            <div className='program'>
                <h1>JORDAN DESIGN PROGRAM</h1>
                <img src='https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1237,c_limit/64946036-254d-42b1-874c-d369cc8a8249/the-jordan-brand-wings-youth-programs.jpg' />
            </div>
            <div className='basketball'>
                <h1>BEYOND BASKETBALL</h1>
                <img src='https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1237,c_limit/fff62aaa-5512-47df-8689-ee37a76b9880/the-jordan-brand-wings-youth-programs.jpg' />
            </div>
            <div className='involvement'>
                <h1>COMMUNITY INVOLVEMENT</h1>
                <div className='involvement-flex'>
                    <div className='involvement-img'>
                        <img src='https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_611,c_limit/8af5f2cf-7513-4f2d-a796-713d5c571e21/the-jordan-brand-wings-youth-programs.jpg' />
                        <h2>JORDAN FAMILY</h2>
                        <p>Our athletes and family are helping to end systemic racism.</p>
                        <button><a href='https://www.nike.com/jordan/community/family' target='_blank'>Join the Cause</a></button>
                    </div>
                    <div className='involvement-img'>
                        <img src='https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_611,c_limit/695ce556-cecb-4e27-ab3b-288cdd849c4c/the-jordan-brand-wings-youth-programs.jpg' />
                        <h2>BLACK COMMUNITY COMMITMENT</h2>
                        <button><a href='https://www.nike.com/jordan/community/black-community-commitment' target='_blank'>Explore Our Commitment</a></button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Wings
