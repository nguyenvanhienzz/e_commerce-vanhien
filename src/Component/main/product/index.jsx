import './product.css';
import React from 'react'
import productData from './productData';
import Productss from './productss';


const Product = () => {

    return (
        <>
            <section className='products'>
                <h1 className='heading'>Latest <span>Product</span></h1>
                <div className='box-container'>
                    {productData.map((item) => (
                        item.imgModels.map((img) => (
                            item.price.map((price) => (
                                img.Modes1.map((img1) => (
                                    <Productss
                                        {...item}
                                        imgOne={img1.imgOne}
                                        salePrice={price.salePrice}
                                        Price={price.Price}
                                        {...img}
                                        {...img1}
                                    />
                                ))
                            ))
                        ))
                    ))}
                </div>
            </section>
        </>
    )
}

export default Product
