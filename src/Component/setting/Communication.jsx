import React from 'react'

const Communication = () => {
    return (
        <div className='communication'>
            <p>Communication Preferences</p>
            <p className='text'>General Communication<p className='text1'>Stay up to speed on the newest Nike products, styles and technology.</p></p>
            <label className='label-check'>
                <input type='checkbox' />
                <div className='checked'></div>
                Receive Email
            </label><br />
            <button>Save</button>
        </div>
    )
}

export default Communication
