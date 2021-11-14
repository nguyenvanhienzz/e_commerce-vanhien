import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { addToBasket, AddToFavourite, selectItems, selectproductdetails } from '../slices/basketSlice';
import './ProductDetails.css';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import { useHistory } from 'react-router';
const ProductDetails = () => {
    const selectProductDetails = useSelector(selectproductdetails);
    const dispactch = useDispatch();
    const [state, setState] = useState(false);
    const ref = useRef(null)
    const [img, setImg] = useState([]);
    const [sizes, setSize] = useState(undefined);
    const [update, setUpdate] = useState(false);
    const [favourites, setFavourites] = useState(false);
    const selectItem = useSelector(selectItems);
    const sumlength = selectItem.reduce((total, item) => total + item.countInStock, 0);

    const history = useHistory()
    const clickState = () => {
        setState(!state);
    }
    useEffect(() => {
        selectProductDetails.forEach((item) => {
            return (
                setImg([item.imgOne, item.imgTow, item.imgThree, item.imgFour])
            )
        })
    }, [])
    const check = () => {
        let res = true;
        if (sizes === undefined || sizes === null) {
            return false;
        }
        return true;
    }
    const handerSize = (size, index) => {
        setSize(size)
        const sizes = ref.current.children;
        for (let i = 0; i < sizes.length; i++) {
            sizes[i].className = sizes[i].className.replace("active", "size-btn");
        }
        sizes[index].className = "active";
    }
    const Addtocart = () => {
        selectProductDetails.forEach((item) => {
            const product = {
                ...item,
                imgOne: img[0],
                updateSize: sizes,
            }
            if (check()) {
                dispactch(addToBasket(product));
                setUpdate(true);
            }
            else {
                setSize(null);
            }
        }
        )
    }

    const Addtofavourite = () => {
        selectProductDetails.forEach((item) => {
            const product = {
                ...item,
                imgOne: img[0],
            }
            dispactch(AddToFavourite(product));
            setUpdate(true);
            setFavourites(true);
        })
    }

    return (
        <div>
            <div className={!update ? '' : 'main'} onClick={() => setUpdate(false)}>
                <div className={!update ? 'notification-none' : 'notification'}  >
                    <div className='noti-icon'>
                        <p>{favourites ? 'Added to favourites' : 'Added to Cart'}</p>
                        <AiOutlineClose className='icon-clone' onClick={() => setUpdate(false)} onClick={() => setFavourites(false)} />
                    </div>
                    {selectProductDetails.map((item) => (
                        <div className='product-noti'>
                            <img src={img[0]} />
                            <div className='noti-context'>
                                <p>{item.title}</p>
                                {favourites ? '' : <p className='noti-p'>Size {sizes}</p>}
                                <p >${item.salePrice}<span>${item.Price}</span></p>
                            </div>

                        </div>
                    ))}
                    <div className='btn-view'>
                        {
                            favourites ? <button className='btn-favourites' onClick={() => history.push('/favourite')}>View Favourites</button> : <><button className='btn-cart' onClick={() => history.push('/checkout')}>View Cart ({sumlength})</button>
                                <button onClick={() => history.push('/detailscheckout')}> CheckOut</button></>
                        }
                    </div>
                </div>

            </div>
            <section className='productdetails'>
                {selectProductDetails.map((item) => (
                    <>
                        <div className='productdetails-left'>
                            <div className='details-list'>
                                {img.map((imgs) => (
                                    <div className='img' >
                                        <img src={imgs} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='productdetails-right' >
                            <h2>{item.title}</h2>
                            <p>${item.Price}</p>
                            <div className='right-list'  >
                                <img src={item.imgOne} onClick={() => setImg([item.imgOne, item.imgTow, item.imgThree, item.imgFour])} />
                                <img src={item.imgOne2} onClick={() => setImg([item.imgOne2, item.imgTow2, item.imgThree2, item.imgFour2])} />
                                <img src={item.imgOne3} onClick={() => setImg([item.imgOne3, item.imgTow3, item.imgThree3, item.imgFour3])} />
                            </div>
                            <p>Select Size</p>
                            <div className='right-size'>
                                <div className={sizes !== null ? 'right-input' : 'right'} ref={ref}>
                                    {item.size.map((size, index) => (
                                        <button key={index} value={size} className='size-btn' onClick={(e) => handerSize(e.target.value, index)}>{size}</button>
                                    ))}
                                </div>
                                {sizes !== null ? "" : <div className='please-size'>Please select a size.</div>}
                            </div>
                            <button onClick={Addtocart} className='btn-add'>Add To Cart</button>
                            <div className='favourite-like'>
                                <button onClick={Addtofavourite} className='btn-add' >Favourite  <AiOutlineHeart className='icon' /></button>
                            </div>
                            <div className='text'>
                                <p className='text-p'>Kyri e needs shoes that won't slow him down and help him connect to the court.
                                    The {item.title} is stripped of all excess to keep it lean and lightweight
                                    while fully containing the foot and helping to eliminate movement inside the shoe.
                                    Cushlon foam and Zoom Air provide a smooth, responsive ride,
                                    and the data-informed traction keeps Kyrie low to the ground and in control.</p>
                                <div className='returns'>
                                    <p className='returns-free' onClick={clickState}>Free Delivery and Returns{state ? <IoIosArrowUp className='icon' /> : <IoIosArrowDown className='icon' />}</p>
                                    <div className={state ? 'return-text' : 'return-none'}>
                                        <p className='order'>Your order of 5.000.000₫ or more gets free standard delivery.</p>
                                        <ul>
                                            <li>Standard delivered 4-5 Business Days</li>
                                            <li> Express delivered 2-4 Business Days</li>
                                        </ul>
                                        <p className='order'>Orders are processed and delivered Monday-Friday (excluding public holidays)<br />
                                            Nike Members enjoy free returns.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ))
                }
            </section >

        </div >
    )
}

export default ProductDetails
