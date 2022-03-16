import React from 'react';
import { Link } from "react-router-dom";


const Card = ({
    product_id,
    user_id,
    name,
    image_url,
    description,
    start_bid,
    multiple_bid,
    start_time,
    end_time,
    highest_bid,
    total_bidder,
    store_name,
    handleClickProduct
}) => {
    return (
        <div className="column is-one-fifth" onClick={handleClickProduct}>
            <Link to={`/product/${product_id}`}>
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src={image_url} alt="Placeholder image" />
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p className="title is-6">{name}</p>
                                <p className="is-6">{store_name}</p>
                            </div>
                        </div>

                        <div class="content">
                            <p className="title is-4"><strong>Rp. {start_bid}</strong></p>
                            <p><strong>{total_bidder}</strong> orang telah ikut dalam lelang</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div> 
    )
}

export default Card;