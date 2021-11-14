import React from 'react';
import './Community.css';
const Community = () => {
    return (
        <div className='community-component'>
            <div className='community-imgbig'>
                <img src='https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1237,c_limit/8a48be67-4d62-4b81-95b0-d2a94e4b68c0/the-jordan-brand-community.jpg' />
                <h1>GLOBAL BLACK HISTORY <br />SEASON<br />CHAPTER 1: BRIXTON</h1>
            </div>
            <div className='community-text'>
                <h1>A CELEBRATION OF BLACK CULTURE</h1>
                <p>In our continued commitment to action over words, the Jordan Brand wants to proudly and purposefully acknowledge the global impact of Black Culture. We come together to mark Global Black History Season, a celebration of Black culture that lives beyond one month and one country’s perspective. The tip-off begins October 1, 2021 for the start of UK Black History Season in Brixton, South London. Stay tuned for more details on how you can take part.</p>
            </div>

            <div className='black-culture'>
                <div className='black-culture1'>
                    <img src='https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_611,c_limit/ee6e7f5a-1337-47d6-8030-176de3e9e563/the-jordan-brand-community.jpg' />
                    <h1>ELEVATING BLACK VOICES AND CREATORS</h1>
                    <p>Meet the cast and crew and go behind the scenes to the making of the film.</p>
                    <button><a href='https://air.jordan.com/card/the-talent-behind-the-why-not-film/' target='_blank' >Explore More</a></button>
                </div>
                <div className='black-culture1'>
                    <img src='https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_611,c_limit/589db2ea-8a62-4dc4-bb24-fad6e01f6a03/the-jordan-brand-community.jpg' />
                    <h1>EMPOWERING YOUTH IN CRENSHAW DISTRICT</h1>
                    <p>Your future is unlocked. The newly renovated  Crenshaw YMCA Community Center is now open.</p>
                    <button><a href='https://www.ymcala.org/blog/crenshaw-y-unveils-new-sports-facility-russell-westbrook-foundation-jordan-brand' target='_blank' >Learn More</a></button>
                </div>
            </div>
            <div className='community-our'>
                <h1>OUR PARTNERS</h1>
                <div className='community-partners'>
                    <div className='our-partners'>
                        <img src='https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_415,c_limit/0f45ce6d-47d5-4eb8-9d71-eea7dae41050/the-jordan-brand-community.jpg' />
                        <h2>LEGAL DEFENSE AND EDUCATIONAL FUND</h2>
                        <p>is the nation’s premier civil rights law organization. It employs litigation, advocacy and public education to advance its mission to achieve racial justice, equality and an inclusive society.</p>
                        <button><a href='https://www.naacpldf.org/' target='_blank'>LEARN MORE</a></button>
                    </div>
                    <div className='our-partners'>
                        <img src='https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_415,c_limit/4f51aece-058b-49b5-8246-0481a536b9f7/the-jordan-brand-community.jpg' />
                        <h2>FORMERLY INCARCERATED CONVICTED PEOPLE AND FAMILIES MOVEMENT</h2>
                        <p>is a national movement of directly impacted people speaking in their own voices about the need to end mass incarceration.</p>
                        <button><a href='https://ficpfm.org/' target='_blank'>LEARN MORE</a></button>
                    </div>
                    <div className='our-partners'>
                        <img src='https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_415,c_limit/be9c27f0-c2e3-4e2f-baad-6e98c71e3e9d/the-jordan-brand-community.jpg' />
                        <h2>BLACK VOTERS MATTER</h2>
                        <p>advocates for policies to expand voting rights/access, including expanded early voting, resisting voter ID, re-entry restoration of rights and strengthening the Voting Rights Act.</p>
                        <button><a href='https://blackvotersmatterfund.org/' target='_blank'>LEARN MORE</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community
