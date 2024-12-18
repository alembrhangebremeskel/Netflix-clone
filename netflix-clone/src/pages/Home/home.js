import React from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer'
import Banner from '../../components/Banner/Banner';
import Rowlist from '../../components/Rows/Rowlist/Rowlist';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Rowlist />
            <Footer />
        </div>
    );
}

export default Home;
