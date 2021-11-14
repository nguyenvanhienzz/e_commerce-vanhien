import React from 'react';
import Header from './Component/header';
import Banner from './Component/banner';
import bannerData from './Component/banner/bannerData';
import Product from './Component/main/product';
import Featured from './Component/main/product/featured';
import featuredData from './Component/main/product/featuredData';
import Review from './Component/main/reviews';
import Footer from './Component/footer';
import Deal from './Component/main/deal';
import ScrollToTop from './ScrollToTop';
const Home = () => {
    return (
        <>
            <Header />
            <Banner side={bannerData} />
            <Product />
            <Featured />
            <Deal />
            <Review />
            <Footer />
            <ScrollToTop />
        </>

    )
}

export default Home
