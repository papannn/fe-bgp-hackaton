import React from 'react';


const AddProduct = () => {

    return (
        <section className="section">
            <h1 className="title is-4">Add Bid</h1>
            <div className="columns">
                <div className="column is-one-third">
                    <div className="field">
                        <label>Nama barang</label>
                        <input className="input"/>
                    </div>

                    <div className="field">
                        <label>Gambar barang</label>
                        <input className="input" type="file"/>
                    </div>

                    <div className="field">
                        <div className="columns">
                            <div className="column">
                                <label>Waktu mulai</label>
                                <input className="input" type="date"/>
                            </div>
                            <div className="column">
                                <label>Waktu berakhir</label>
                                <input className="input" type="date"/>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label>Deskripsi</label>
                        <textarea class="textarea has-fixed-size" placeholder="Deskripsi"></textarea>
                    </div>
                    
                    <div className="field">
                        <label>Harga mulai bid</label>
                        <input className="input"/>
                    </div>
                
                    <div className="field">
                        <label>Harga kelipatan</label>
                        <input className="input"/>
                    </div>

                    <button className="button is-primary">Submit</button>
                </div>
            </div>
        </section>
    )
}

export default AddProduct;