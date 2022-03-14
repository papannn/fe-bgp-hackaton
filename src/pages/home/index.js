import React, {useState} from 'react';
import Card from '../../components/card';

import "./styles.css"


const Home = () => {
    const [productList, setProductList] = useState([
        {
            "product_id" : 1,
            "user_id" : 1,
            "name" : "Mainan anak lucu",
            "image_url" : "https://cdn-brilio-net.akamaized.net/news/2021/07/02/209035/1509006-potret-lucu-mainan-anak.jpg",
            "description" : "Mainan anak untuk hadiah ulang tahun, cocok buat kado natal juga bunda",
            "start_bid" : 100000,
            "multiple_bid" : 500,
            "start_time" : 1647173241, //unix timestamp
            "end_time" : 1647173241,
            "highest_bid_id" : 1,
            "total_bidder" : 20,
        }
    ])

    const showProductList = () => {
        return productList.map((product) => {
            return <Card {...product}/>
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