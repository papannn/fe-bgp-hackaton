import React, {useState} from 'react';

import moment from 'moment';

import "./styles.css"
import axios from 'axios';
import { BE_HOST } from '../../const';


const Product = (props) => {

    const product = props.productData;
    const [countdownText, setCountdownText] = useState("")
    const token = localStorage.getItem('token');
    setInterval(() => {
        const currentUnix = new Date() / 1000 | 0;
        const endTime = product.end_time;
        const diffTime = endTime - currentUnix;
        var duration = moment.duration(diffTime*1000, 'milliseconds');

        duration = moment.duration(duration - 1000, 'milliseconds');
        setCountdownText(duration.days() + " hari " + duration.hours() + " jam " + duration.minutes() + " menit " + duration.seconds() + " detik");
    }, 1000)

    const [amount, setAmount] = useState(0);

    const bid = () => {
        const payload = {
            product_id: product.product_id,
            user_id: token,
            amount: parseInt(amount, 10)
        }
        axios.post(BE_HOST + "bid", payload).then(res => {

        });
    }

    return (
        <section className="section">
            <div className="columns">
                <div className="column is-one-quarter">
                    <figure class="image is-4by3">
                        <img src={product.image_url} alt="Placeholder image" />
                    </figure>
                </div>
                <div className="column">
                    <h1 className="title is-5 product-title">{product.name}</h1>
                    <p className="title is-4">Rp. {product.start_bid}</p>
                    <p className="title is-4"></p>
                    <p className="subtitle">
                    {product.description}
                    </p>
                </div>
                <div className="column is-one-fifth">
                    <div className="card">
                        <div className="card-content">
                            <p className="title is-4 card-info">
                                Berakhir pada
                            </p>
                            <p className="title is-5 card-info" id="countdown">
                                {countdownText}
                            </p>
                            <p className="subtitle is-6 card-info bid-number-info">
                                {product.total_bidder} orang telah ngebid
                            </p>
                            <input className="input input-bid" type="number" onChange={(e) => {
                                setAmount(e.target.value);
                            }}/>
                            <button className="button is-success button-bid" onClick={() => {
                                bid()
                            }}>Bid</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product;