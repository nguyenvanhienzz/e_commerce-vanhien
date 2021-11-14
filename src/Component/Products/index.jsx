import './products.css';
import React, { useState, useEffect } from 'react'
import ProductData from '../../Data/ProductData';
import ProductModelData from './productModelData';
import ListData from '../../Data/ListData'
import { BiSliderAlt } from 'react-icons/bi';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { DataProducts, selectData, selectItems } from '../slices/basketSlice';
const Products = () => {
    const [key, setKey] = useState(false);
    const [item, setItem] = useState('');
    const [products, setProducts] = useState(ProductData);
    const selectProductData = useSelector(selectData);
    const dispatch = useDispatch();
    const [hide, setHide] = useState(false);
    const handerKey = () => {
        setKey(!key)
    }
    const handerHide = () => {
        setHide(!hide);
    }

    const handerClick = (e) => {
        setItem(e.target.outerText);
    }
    const innitFiter = {
        gender: [],
        colour: [],
        brand: [],
    }
    const [filter, setFilter] = useState(innitFiter)

    const filterSelect = (type, checked, data) => {
        if (checked) {
            switch (type) {
                case "Gender": {
                    setFilter({ ...filter, gender: [...filter.gender, data] })
                    break;

                }
                case "Colour": {
                    setFilter({ ...filter, colour: [...filter.colour, data] })
                    break;
                }
                case "Brand":
                    {
                        setFilter({ ...filter, brand: [...filter.brand, data] })
                        break;
                    }
                default:

            }
        } else {
            switch (type) {
                case "Gender": {
                    const newGender = filter.gender.filter(e => e !== data)
                    setFilter({ ...filter, gender: newGender })
                    break;
                }
                case "Colour": {
                    const newColour = filter.colour.filter(e => e !== data)
                    setFilter({ ...filter, colour: newColour })
                    break;
                }
                case "Brand": {
                    const newBrand = filter.brand.filter(e => e !== data)
                    setFilter({ ...filter, brand: newBrand })
                    break;
                }
                default:

            }
        }
    }
    useEffect(() => {
        let temp = ProductData;
        if (filter.gender.length > 0) {
            temp = temp.filter(e => {
                const check = e.gender.find(gender => filter.gender.includes(gender))
                return check !== undefined;
            })
        }
        if (filter.colour.length > 0) {
            temp = temp.filter(e => {
                const check = e.colour.find(colour => filter.colour.includes(colour))
                return check !== undefined;
            })
        }
        if (filter.brand.length > 0) {
            temp = temp.filter(e => filter.brand.includes(e.brand))
        }
        if (item === 'Price: High-Low') {
            temp = temp.slice().sort((a, b) => (b.price.map(item => item.salePrice) - a.price.map(item => item.salePrice)));
        }
        if (item === 'Price: Low-High') {
            temp = temp.slice().sort((a, b) => (a.price.map(item => item.salePrice) - b.price.map(item => item.salePrice)));

        }
        if (item === 'Featured') {
            temp = temp.slice().sort((a, b) => (a.id - b.id));
        }
        if (item === 'Newest') {
            var today = new Date();
            var year = today.getFullYear();
            temp = temp.slice().sort((a, b) => (b.inputItem - year));

        }
        setProducts(temp);
        dispatch(DataProducts(temp))
    }, [filter, ProductData, item]);
    return (
        <div className='section'>
            <div className='section-hader'>
                <p>Men's Shoes & Sneakers({selectProductData.length})</p>
                <form >
                    <div class="item" onClick={handerHide}>
                        <label for="order-by">{hide ? 'Show Filter' : 'Hide Filter'}</label>
                        <BiSliderAlt className='icon-alt' />
                    </div>

                    <div class="item-list">
                        <div className='item-key' onClick={handerKey}>
                            <label for="sort-by">Sort By{item === '' ? '' : ':'} </label>
                            <span>{item}</span>
                            <div className='icon-key'>{key ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</div>
                        </div>
                        <ul className={key ? 'ularrowup' : 'ularrowdown'} onClick={handerKey}>
                            <li>
                                <a value="Featured" onClick={handerClick} >Featured</a>
                                <a value="Newest" onClick={handerClick}>Newest</a>
                                <a value="Price:High-Low" onClick={handerClick} >Price: High-Low</a>
                                <a value="Price:Low-High" onClick={handerClick} >Price: Low-High</a>
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
            <div className={!hide ? 'products-col ' : 'product-none'} >
                <div className='col-1-of-4' >
                    <div className={hide ? 'col-1' : 'col-none'}>
                        {ListData.map((list, indexs) => (
                            <div className={hide ? 'block' : 'block-none'} key={indexs}>
                                <div className='block-title' >
                                    <h3>{list.title}</h3>
                                </div>
                                <ul className='block-content'>
                                    <li>
                                        {
                                            list.data.map((data, index) => (
                                                <div className='list-check' key={index}>
                                                    <input type='checkbox' onChange={(e) => filterSelect(list.title, e.target.checked, data)} />

                                                    <label >
                                                        <span>{data}</span>
                                                    </label>
                                                </div>
                                            ))}
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='col-3-of-4'>
                    <div className={!hide ? 'product-layouts' : 'product-none'}  >
                        {selectProductData.map((item, index) => (
                            <div key={index}>
                                {item.imgModels.map((img, index) => (
                                    <div key={index} className={!hide ? 'img-container' : 'img-context'}>
                                        {item.price.map((price) => (
                                            img.Modes1.map((models) => (
                                                img.Modes2.map((models2) => (
                                                    img.Modes3.map((models3) => (
                                                        <ProductModelData
                                                            {...item}
                                                            imgOne={models.imgOne}
                                                            Price={price.Price}
                                                            salePrice={price.salePrice}
                                                            {...models}
                                                            {...models2}
                                                            {...models3}
                                                        />
                                                    ))
                                                ))
                                            ))
                                        ))}
                                    </div>
                                )
                                )}
                            </div>
                        ))}
                    </div>
                </div >
            </div >
        </div >
    )
}

export default Products
