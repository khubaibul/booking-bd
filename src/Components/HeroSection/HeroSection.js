import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div>
            <div className="hero min-h-screen hero-bg">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-6xl font-bold text-slate-100">Let's Code Test</h1>
                        <p className="mb-5 text-yellow-50">In this quiz you can test your programming knowledge by some interesting quiz. Let's get into it...</p>
                        <Link to="/quiz/1" className="btn btn-info">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;