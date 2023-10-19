import React from 'react';
import './notice.css';

function Notice() {
    return (
        <div className="not-found-container">
            <div className="error-code">Oh oh~</div>
            <div className="error-message">Check out later!</div>
            <p>This page is under developing and will come up soon~</p>
            <a href="/Kanbas" className="home-link">Back to Home</a>
        </div>
    );
}

export default Notice;