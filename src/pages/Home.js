import React from "react";
import './Home.css';
import { useNavigate } from "react-router-dom";

function Home() {
    let navigate = useNavigate();

    const routeChange = () =>{ 
        navigate("/map");
    }
    return (
        <div>
            {/* logo and setting icon */}
            <div className="flex justify-between home-padding-top">
                <img className="logo" src="resources/images/logo.png" alt="logo" />
                <i class="fas fa-cog fa-2x setting-icon-color"></i>
            </div>
            <img className="covid-trends home-img" src="resources/images/covid-trends.png" alt="covid trends" />
            <img onClick={routeChange} className="home-map home-img" src="resources/images/home-map.png" alt="home map" />

            {/* covid policy */}
            <div>
                <p className="covid-policy-title">Covid-19 Policy</p>
                {/* {KslangInfo.map(card => 
                    <KslangCard key={card.id} id={card.id} photo={card.photo} name={card.name} />)} */}
                    <details className="covid-policy-item">
                        <summary><strong>01-17-2022</strong><img className="new" src="resources/images/new.png" alt="logo" /></summary>
                        <p>The testing strategy for COVID-19 in Québec takes each region’s specific context into account. The number of tests available in each region is calculated based on the size of the population, but also on the intensity of community transmission observed there.</p>
                    </details>
                    <details className="covid-policy-item">
                        <summary><strong>01-02-2022</strong></summary>
                        <p>The testing strategy for COVID-19 in Québec takes each region’s specific context into account. The number of tests available in each region is calculated based on the size of the population, but also on the intensity of community transmission observed there.</p>
                    </details>
                    <details className="covid-policy-item">
                        <summary><strong>12-20-2021</strong></summary>
                        <p>The testing strategy for COVID-19 in Québec takes each region’s specific context into account. The number of tests available in each region is calculated based on the size of the population, but also on the intensity of community transmission observed there.</p>
                    </details>
                    <details className="covid-policy-item">
                        <summary><strong>11-15-2021</strong></summary>
                        <p>The testing strategy for COVID-19 in Québec takes each region’s specific context into account. The number of tests available in each region is calculated based on the size of the population, but also on the intensity of community transmission observed there.</p>
                    </details>
            </div>
        </div>
    )
}

export default Home;