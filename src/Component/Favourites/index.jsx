import './Favourite.css';
import React from 'react'
import { useSelector } from 'react-redux';
import { addToBasket, RemoveToFavourite, selectfavourite } from '../slices/basketSlice';
import { useDispatch } from 'react-redux';
const Favourites = () => {
    const favouriter = useSelector(selectfavourite);
    const dispatch = useDispatch();
    const addToCart = (id, imgOne) => {
        favouriter.forEach((item) => {
            if (item.id == id && item.imgOne === imgOne) {
                dispatch(addToBasket({ ...item }))

            }

        })
    }
    const removeToFavourite = (id, imgOne) => {
        favouriter.forEach((item) => {
            if (item.id === id && item.imgOne === imgOne) {
                dispatch(RemoveToFavourite({ id, imgOne }))
            }
        })
    }


    return (
        <>

            <div className='favourite'>
                <div>
                    <p>Favourites</p>
                    {favouriter.length != '' ? (
                        <div className='list'>

                            {
                                favouriter.map((favor, index) => (
                                    <div className='list-favourites' key={index}>
                                        <img src={favor.imgOne} />
                                        <div className='favor-context'>
                                            <h3>{favor.title}</h3>
                                            <p>${favor.Price}</p>
                                        </div>
                                        <div className='btn-favor'>
                                            <button onClick={() => addToCart(favor.id, favor.imgOne)}>Add to cart</button>
                                            <button onClick={() => removeToFavourite(favor.id, favor.imgOne)}>Remove</button>
                                        </div>
                                    </div>
                                ))

                            }
                        </div>
                    ) :
                        <h2 className='items-favourite'>Items added to your Favourites will be saved here.</h2>
                    }

                </div>
            </div>

        </>
    )
}

export default Favourites
