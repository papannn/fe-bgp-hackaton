import React, { useState } from 'react';


const Profile = () => {
    const [profileData, setProfileData] = useState({
        "user_id" : 1,
        "name" : "aa",
        "email" : "aa@aa.aa",
        "img_url": "https://cdn-brilio-net.akamaized.net/news/2021/07/02/209035/1509006-potret-lucu-mainan-anak.jpg",
        "phone_number" : 123123,
    });

    return (
        <section className="section">
            <h1 className="title is-4">Profile</h1>
            <div className="columns">
                <div className="column is-one-quarter">
                    <figure class="image is-4by3">
                        <img src={profileData.img_url} alt="Placeholder image" />
                    </figure>
                </div>
                <div className="column is-one-third">
                    <div className="columns">
                        <div className="column">
                            <p>Name</p>
                            <p>Email</p>
                            <p>Phone Number</p>
                        </div>
                        <div className="column">
                            <p>{profileData.name}</p>
                            <p>{profileData.email}</p>
                            <p>{profileData.phone_number}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile;