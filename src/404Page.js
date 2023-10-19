import React from 'react';
import './404Page.css';

function NotFoundPage() {
    return (
        <div className="not-found-container">
            <div className="error-code">404</div>
            <div className="error-message">Page Not Found</div>
            <p>We can't find the page you're looking for.</p>
            <a href="/Kanbas" className="home-link">Back to Home</a>
        </div>
    );
}

export default NotFoundPage;