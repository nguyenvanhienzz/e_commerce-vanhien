import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { LognOut } from '../slices/userSlice';
import './header.css';


const Profires = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const logout = () => {
        dispatch(LognOut());
        history.push('/login');
    }
    return (
        <div className='profire-out'>
            <ul>
                <li className='Accout'>Account</li>
                <li>Profile</li>
                <li onClick={() => history.push('/order')}>Orders</li>
                <li onClick={() => history.push('/settings')}>Account Settings</li>
                <li onClick={logout}>Log Out</li>
            </ul>
        </div>
    )
}

export default Profires
