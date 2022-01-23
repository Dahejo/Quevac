import React from "react";
import './Profile.css';

import { TestInfo } from '../components/TestInfo';
import TestCard from '../components/TestCard';


function Profile() {
    return (
        <div className="padding-top-48">
            <div className="flex profile-status-container">
                <div className="profile-width-140 padding-left-24">
                    <h2 className="padding-bottom-8"><strong>Hejin Jeong</strong></h2>
                    <p>Female<br/>
                    1999.04.25<br/>
                    (581) 123-4567<br/></p>
                </div>
                <div className="profile-status-text">
                    <p className="font-s text-right">Vaccination Status</p>
                </div>
            </div>
            <div className="padding-top-16">
                <img className="profile-getvc-banner-img" src="resources/images/banner-getvaccine.png" alt="get vaccinated" />
            </div>
            <div className="profile-width-312 padding-top-32">
                <h2 className="padding-bottom-8">Test result</h2>
                <div className="profile-width-312">
                    {TestInfo.map((item, index) => {
                        return(
                            <div key={index}>
                                {/* props: result, place, date*/}
                                <TestCard
                                result={item.result}
                                place={item.place}
                                date={item.date}/>
                                <hr className="profile-result-hr"/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Profile;