import React, { useState } from 'react'
import { FaRegEdit } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai'
import './profile-visibility.css';
import { useDispatch } from 'react-redux';
import { DeleteProfile, Profile } from '../slices/settings';
const ProfileVisibility = () => {
    const [close, setClose] = useState(false);
    const dispatch = useDispatch();
    const [profileImg, setProfileImg] = useState('');
    const handeredit = () => {
        setClose(!close);
    }
    const imgHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setProfileImg(reader.result);
                dispatch(Profile(reader.result));
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }

    const deleteProfiles = () => {
        dispatch(DeleteProfile());
        setProfileImg('');
    }

    return (
        <>
            <div className='profile-visibility'>
                <p>Profile Visibility</p>
                <p className='text'>Your Nike profile represents you on product reviews and across the Nike family of apps.</p>
                <div className='profile-display'>
                    <div className='edit-img' onClick={handeredit}>
                        <img src={profileImg != '' ? profileImg : 'https://www.nike.com/static/dotcom-member/settings/_next/public/images/default_avatar.png'} /><br />
                        <FaRegEdit className='icon' />
                    </div>
                    <div className='edit-display'>
                        <p>Profile Display</p>
                        <p className='text-name'>vanhien</p>
                        <button >Edit</button>
                    </div>
                </div>
                <div className='profile-review'>
                    <p>Product Review Visibility <br />Choose how you will appear on any Changing
                        these settings will also affect your visibility
                        for connecting with friends on the Nike Training Club
                        and Nike Run Club apps.
                    </p>
                    <p className='profile-learn'>Learn More</p>
                    <div className='profile-radio'>
                        <label>
                            <input type='radio' name='private' />
                            <div className='radio-radio'></div>
                            Private: Profile visible to only you
                        </label><br />
                        <label>
                            <input type='radio' name='private' />
                            <div className='radio-radio'></div>
                            Social: Profile visible to friends
                        </label><br />
                        <label>
                            <input type='radio' name='private' />
                            <div className='radio-radio'></div>
                            Public: Everyone can view profile
                        </label>
                    </div>
                    <div className='profile-sharing'>
                        <p>Location Sharing</p>
                        <label>
                            <input type='radio' name='share' />
                            <div className='radio-radio'></div>
                            Share my location with friends only
                        </label><br />
                        <label>
                            <input type='radio' name='share' />
                            <div className='radio-radio'></div>
                            Don't share my location
                        </label>
                    </div>
                </div>
                <button>Save</button>
            </div>

            <div className={close ? 'modal' : 'modal-none'} >
                <div className='details-edit' >
                    <div className={close ? 'edit' : 'edit-clone'}>
                        <div>
                            <AiOutlineClose className='icon-close' onClick={() => setClose(!close)} />
                        </div>
                        <header className='edit-profile'>
                            <p className='p-picture'>Edit Profile Picture</p>
                            <p>Image must be in jpg file format.File size must be less than 2MB.</p>
                            <img src={profileImg != '' ? profileImg : 'https://www.nike.com/static/dotcom-member/settings/_next/public/images/default_avatar.png'} /><br />
                        </header>
                        <div className='btn-canlend'>
                            {
                                profileImg == '' ? <button onClick={() => setClose(!close)}>Cancel</button> : <button onClick={deleteProfiles}>Delete</button>
                            }
                            <label type='submit' className='btn-input' for='file'>
                                <input type='file' id='file' accept='.jpg' className='input-update' onChange={imgHandler} />{
                                    profileImg == '' ? 'Upload Photo' : 'Change Photo'
                                }
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileVisibility
