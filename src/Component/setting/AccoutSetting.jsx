import React from 'react'
import { useHistory, useRouteMatch } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './AccoutSetting.css';
import { FiUser, FiCreditCard, FiShoppingBag, FiMail } from 'react-icons/fi';
import { FaShippingFast } from 'react-icons/fa';
import { BiLinkAlt, BiShareAlt } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { selectAccout } from '../slices/userSlice';
import AccountDetails from '../setting/AccountDetails ';
import Payment from '../setting/Payment-methods';
import DeliveryAddresses from './DeliveryAddresses';
import ShopPreferences from './ShopPreferences';
import Communication from './Communication';
import LinkedAccounts from './LinkedAccounts';
import ProfileVisibility from './ProfileVisibility';

const AccoutSetting = () => {
    const selectaccout = useSelector(selectAccout);
    const { path, url } = useRouteMatch();
    const history = useHistory();
    return (
        <section className='accout-setting'>
            <p>Settings</p>
            <div className='accout-list'>
                <ul>
                    <li onClick={() => history.push(`${url}`)}><FiUser className='icons' />Account Details</li>
                    <li onClick={() => history.push(`${url}/payment-methods`)}><FiCreditCard className='icons' />Payment Methods</li>
                    <li onClick={() => history.push(`${url}/delivery-addresses`)}><FaShippingFast className='icons' />Delivery Addresses</li>
                    <li onClick={() => history.push(`${url}/shop-preferences`)}><FiShoppingBag className='icons' />Shop Preferences</li>
                    <li onClick={() => history.push(`${url}/communication-preferences`)}><FiMail className='icons' />Communication Preferences</li>
                    <li onClick={() => history.push(`${url}/profile-visibility`)}><BiShareAlt className='icons' />Profile Visibility</li>
                    <li onClick={() => history.push(`${url}/linked-accounts`)}><BiLinkAlt className='icons' />Linked Accounts</li>
                </ul>
                <div className='account-detail'>
                    <Switch>
                        <Route path={`${path}`} exact>
                            <AccountDetails />
                        </Route>
                        <Route path={`${path}/payment-methods`} >
                            <Payment />
                        </Route>
                        <Route path={`${path}/delivery-addresses`} >
                            <DeliveryAddresses />
                        </Route>
                        <Route path={`${path}/shop-preferences`} >
                            <ShopPreferences />
                        </Route>
                        <Route path={`${path}/communication-preferences`} >
                            <Communication />
                        </Route>
                        <Route path={`${path}/profile-visibility`} >
                            <ProfileVisibility />
                        </Route>
                        <Route path={`${path}/linked-accounts`} >
                            <LinkedAccounts />
                        </Route>
                    </Switch>
                </div>
            </div>
        </section >
    )
}

export default AccoutSetting