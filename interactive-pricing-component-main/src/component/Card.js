import React from 'react'
import iconCheck from '../images/icon-check.svg'

const Card = () => {
    return (
        <div className='pricing-card'>
            <div className="card-header">
                <div className="header-text">
                    <span className='pg-text'>100K PAGEVIEWS</span>
                    <span>
                        <span className='price'>$16.00</span>
                        <span className='plan-text'>/ month</span>
                    </span>
                </div>
            </div>
            <div className="slider">
                <input type="range" name="slider" id="slider" />
            </div>
            <div className="toggler-section">
                <span className='small-gray-text'>Monthly Billing</span>
                <span><input type="checkbox" name="toggler" id="toggler" /></span>
                <span className='small-gray-text'>Yearly Billing</span>
                <span className='discount-text'>25% discount</span>
            </div>
            <span className="border"></span>
            <div className="card-footer">
                <div className='features'>
                    <p className='small-gray-text'>
                        <img src={iconCheck} alt="check" />
                        Unlimited websites
                    </p>
                    <p className='small-gray-text'>
                        <img src={iconCheck} alt="check" />
                        100% data ownership
                    </p>
                    <p className='small-gray-text'>
                        <img src={iconCheck} alt="check" />
                        Email reports
                    </p>
                </div>
                <button >Start my trial</button>
            </div>
        </div>
    )
}

export default Card