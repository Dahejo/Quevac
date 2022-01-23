import React from "react";
import './Tab.css';

function Tab() {
    return (
        // tab bar
        <div className="tab-bar-container flex justify-sp-evenly">
            <a href="/"><i className="flex justify-center fas fa-home fa-lg black"></i></a>
            <a href="/card"><i className="flex justify-center far fa-id-card fa-lg black"></i></a>
            <a href="/profile"><i className="flex justify-center fas fa-user fa-lg black"></i></a>
        </div>
    )
}

export default Tab;