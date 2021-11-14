import './header.css';
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { IoSearch, IoBagOutline } from 'react-icons/io5';
import { AiOutlineHeart, AiOutlineAppstore, AiOutlineClose } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { DataProducts, selectItems } from '../slices/basketSlice';
import ProductData from '../../Data/ProductData';
import { selectAccout } from '../slices/userSlice';
import Profires from './Profires';
import { selectSetting } from '../slices/settings';
const Header = () => {
    const selectItem = useSelector(selectItems);
    const selectaccout = useSelector(selectAccout);
    const selectSettings = useSelector(selectSetting);
    const [sidebar, setSidebar] = useState(false);
    const [search, setSearch] = useState(false);
    const showSidebar = () => setSidebar(!sidebar)
    const [type, setType] = useState('');
    const [changes, setChanges] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    const sumlength = selectItem.reduce((total, item) => total + item.countInStock, 0);
    const handerKeyDowns = (key) => {
        if (key.keyCode === 13) {
            const hander = ProductData.filter(item => (item.title.toLowerCase().includes(type.toLowerCase())));
            dispatch(DataProducts(hander));
            setSearch(false);
            history.push('/product');
            setType('');
        }
    }
    const handerChange = () => {
        if (type !== '') {
            const handerchangess = ProductData.filter(item => (item.title.toLowerCase().includes(type.toLowerCase())));
            setChanges(handerchangess);
        }
        else {
            setChanges('');
        }

    }
    useEffect(() => {
        handerChange();
    }, [type]);
    console.log(changes)
    const handerSearch = () => {
        setSearch(true)
    }
    return (
        <>
            <div className='header'>
                <div className='top-header'>
                    <div className='top-logo'>
                        <img src='https://cdn.worldvectorlogo.com/logos/jordan-2.svg' className='img-jordan' />;
                        <img src='https://www.logo.wine/a/logo/Converse_(shoe_company)/Converse_(shoe_company)-Icon-Logo.wine.svg' className='img-convent' />;
                    </div>
                    <div className='top-headerLogin'>
                        <p>Help</p><span>|</span>
                        {selectaccout ?
                            <div className='login-setting'>
                                <div className='user' >
                                    <p>Hi,{selectaccout.username}</p>
                                    {
                                        selectSettings ? <img src={selectSettings} className='img-settings' /> :
                                            <FiUser className='icon' onClick={() => history.push('/login')} />
                                    }
                                    {selectaccout ? <div className='actives'><Profires /></div> : ''}
                                </div>

                            </div> :
                            <div className='logins'>
                                <p onClick={() => history.push('/account')}>Join Us</p><span>|</span>
                                <p onClick={() => history.push('/login')}>Login</p>
                            </div>
                        }
                    </div>
                </div>
                <div className='header-buttom'>
                    <Link className='logo' to='/'>Nike</Link>
                    <nav className={sidebar ? 'navbar active' : 'navbar'}>
                        <Link className='menu' to='/'>Home</Link>
                        <Link className='menu' to='/product'>Products</Link>
                        <Link className='menu' to='/order'>Orders</Link>
                        <Link className='menu' to='/new-releases'>New Releases</Link>
                        <Link className='menu' to='/community'>Blog</Link>
                    </nav>
                    <div className='icons' >
                        <IoSearch className='icon' onClick={handerSearch} />
                        <AiOutlineHeart className='icon' onClick={() => history.push('/favourite')} />
                        <IoBagOutline className='icon' onClick={() => history.push('/checkout')} />
                        <span className={sumlength > 9 ? 'span9' : 'span'}>{sumlength > 9 ? '9+' : sumlength}</span>
                        <AiOutlineAppstore className='appstore' onClick={showSidebar} />
                    </div>
                </div >
            </div>
            <div className={search ? 'main-search' : 'main-search-none'}>
                <div className='modal-overlay' onClick={() => setSearch(false)}></div>
                <div className='search-details' >
                    <div className='search-input'>
                        <img src='https://brandlogos.net/wp-content/uploads/2015/01/Nike-symbol-vector-400x400.png' onClick={() => history.push('/')} />
                        <div className='io-search'>
                            <IoSearch className='icon-search' />
                            <input type='text' placeholder='Search' value={type} onChange={(e) => setType(e.target.value)} onKeyDown={handerKeyDowns} />
                        </div>
                        <button className='btn-clone'>
                            <AiOutlineClose className='icon-clone' onClick={() => setSearch(false)} />
                        </button>

                    </div>
                    <div className='suggested-products'>
                        {changes !== '' ?
                            changes.map((item) => (
                                item.imgModels.map((model) => (
                                    item.price.map((prices) => (
                                        model.Modes1.map((img) => (
                                            <div className='suggested-contant'>
                                                <img src={img.imgOne} />
                                                <p>{item.title}</p>
                                                <p>${prices.Price}</p>
                                            </div>
                                        ))

                                    ))
                                ))
                            ))
                            : ''
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
