import axios from 'axios';
import moment from 'moment';
import React, {useState} from 'react';
import { BE_HOST } from '../../const';


const AddProduct = () => {
    const [name, setName] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(0);
    const [multipleBid, setMultipleBid] = useState(0);
    const [desc, setDesc] = useState("");
    const [startBid, setStartBid] = useState("");
    const token = localStorage.getItem('token');

    const submitProduct = () => {
        let config = {
            headers: {
                'Access-Control-Allow-Credentials': true,
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': "*"
            }
          }
        axios.post(BE_HOST + "product", {
            "user_id" : token,
            "name" : name,
            "image_url" : imgUrl,
            "description" : desc,
            "start_bid" : parseInt(startBid, 10),
            "multiple_bid" : parseInt(multipleBid, 10),
            "start_time" : moment(startTime).unix(),
            "end_time" : moment(endTime).unix()
        }, config).then(() => {
            window.location.href = "/";
        });
    }

    return (
        <section className="section">
            <h1 className="title is-4">Add Bid</h1>
            <div className="columns">
                <div className="column is-one-third">
                    <div className="field">
                        <label>Nama barang</label>
                        <input className="input" onChange={(e) => {
                            setName(e.target.value);
                        }}/>
                    </div>

                    <div className="field">
                        <label>Gambar barang</label>
                        <input className="input" onChange={(e) => {
                            setImgUrl(e.target.value);
                        }}/>
                    </div>

                    <div className="field">
                        <div className="columns">
                            <div className="column">
                                <label>Waktu mulai</label>
                                <input className="input" type="datetime-local" onChange={(e) => {
                                    setStartTime(e.target.value);
                                }}/>
                            </div>
                            <div className="column">
                                <label>Waktu berakhir</label>
                                <input className="input" type="datetime-local" onChange={(e) => {
                                    setEndTime(e.target.value);
                                }}/>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label>Deskripsi</label>
                        <textarea class="textarea has-fixed-size" placeholder="Deskripsi" onChange={(e) => {
                            setDesc(e.target.value);
                        }}></textarea>
                    </div>
                    
                    <div className="field">
                        <label>Harga mulai bid</label>
                        <input className="input" type="number" onChange={(e) => {
                            setStartBid(e.target.value);
                        }}/>
                    </div>
                
                    <div className="field">
                        <label>Harga kelipatan</label>
                        <input className="input" type="number" onChange={(e) => {
                            setMultipleBid(e.target.value);
                        }}/>
                    </div>

                    <button className="button is-primary" onClick={() => {
                        submitProduct()
                    }}>Submit</button>
                </div>
            </div>
        </section>
    )
}

export default AddProduct;