import './featured.css';
import React from 'react'

import featuredData from './featuredData';
import IndexFeatureds from './indexFeatureds';

const Featured = () => {

    return (
        <section className='featured'>
            <h1 className='heading'>
                <span>featured </span>
                products
            </h1>
            {
                featuredData.map((item, index) => (
                    item.imgModels.map((imgModel) => (
                        item.price.map((prices) => (
                            imgModel.Modes1.map((model) => (
                                <IndexFeatureds
                                    key={index}
                                    {...item}
                                    Price={prices.Price}
                                    salePrice={prices.salePrice}
                                    {...imgModel}
                                    {...model}
                                />
                            ))
                        ))
                    ))
                ))
            }

        </section>
    )
}

export default Featured
