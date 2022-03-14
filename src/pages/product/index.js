import React, {useState} from 'react';
import "./styles.css"


const Product = () => {
    const [product, setProduct] = useState({
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
    })

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
                    <p className="title is-4">Windah Shop</p>
                    <p className="subtitle">
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    </p>
                </div>
                <div className="column is-one-fifth">
                    <div className="card">
                        <div className="card-content">
                            <p className="title is-4 card-info">
                                Berakhir pada
                            </p>
                            <p className="title is-5 card-info">
                                12 hari 23 jam 59 menit 23 detik
                            </p>
                            <p className="subtitle is-6 card-info bid-number-info">
                                200 orang telah ngebid
                            </p>
                            <input className="input input-bid"/>
                            <button className="button is-success button-bid">Bid</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product;