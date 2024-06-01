'use client'
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
    // Check if window is defined before rendering the component
    if (typeof window === 'undefined') return null;

    return (
        <div className='navigation-pages'>
            <Link to="/reportview" className='navigation-box'>
                View Report
            </Link>
            <Link to="/bodychart" className='navigation-box'>
                Health Report Body Chart
            </Link>
            <Link to="/smartinter" className='navigation-box'>
                Smart Interpretation
            </Link>
            <Link to="/visualinfo" className='navigation-box'>
                Visual aided information with actionable insights.
            </Link>
        </div>
    );
}
