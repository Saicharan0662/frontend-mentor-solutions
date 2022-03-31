import React, { useState } from 'react'
import iconCheck from '../images/icon-check.svg'

const Card = () => {
    const [isChecked, setIsChecked] = useState(false)
    const [price, setPrice] = useState(16.00)

    return (
        <div className='pricing-card'>
            <div className="card-header">
                <div className="header-text">
                    <span className='pg-text'>100K PAGEVIEWS</span>
                    <span className='price-box'>
                        <span className='price'>
                            ${isChecked ? Math.round((price - price * 0.25) * 100) / 100 : price}
                        </span>
                        <span className='plan-text'>/ {isChecked ? "year" : "month"}</span>
                    </span>
                </div>
            </div>
            <div className="slider-container">
                <label htmlFor="slider"></label>
                <input type="range" name="slider" id="slider" className='slider'
                    min={8} max={125} value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div className="toggler-section">
                <span className='small-gray-text'>Monthly Billing</span>
                <span>
                    <label htmlFor="toggler" className="switch">
                        <input type="checkbox" name="toggler" id="toggler"
                            checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                        <span className="toggler"></span>
                    </label>
                </span>
                <span className='small-gray-text'>Yearly Billing</span>
                <span className='discount-text text'></span>
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