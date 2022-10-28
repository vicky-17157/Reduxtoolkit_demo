import React from 'react';
import Products from '../components/Products';

const Home = () => {
    return (
        <div className="container">
            <h2 className="heading">Everything you need, all in one place</h2>
            <section>
                <Products />
            </section>
        </div>
    );
};

export default Home;