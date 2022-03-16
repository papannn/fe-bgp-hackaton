import React, {useState} from 'react';
import Card from '../../components/card';

import "./styles.css"


const Home = (state) => {
    const productList = state.productList;

    const showProductList = () => {
        return productList.map((product) => {
            return <Card {...product} handleClickProduct={() => state.handleClickProduct(product)}/>
        })
    }

    return (
        <section className="section">
            <h1 className="title is-4">Discover Page</h1>
            <div className="columns card-columns">
                {showProductList()}
            </div>
        </section>
    )
}

export default Home;