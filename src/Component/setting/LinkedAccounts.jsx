import React from 'react'
import { BiBlock } from 'react-icons/bi';
const LinkedAccounts = () => {
    return (
        <div className='linked-accont'>
            <p className='linked'>Linked Accounts</p>
            <p>Manage accounts and services connected to your Nike account.</p>
            <p className='linked-icon'><BiBlock className='icon' />You don't have any connected apps or services.</p>
        </div>
    )
}

export default LinkedAccounts
