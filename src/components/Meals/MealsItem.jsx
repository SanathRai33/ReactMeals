import React from 'react'

const MealsItem = ({ name, description, price }) => {
    return (
        <div className='meals-item'>
            <div className='meals-info'>
                <h5>{name}</h5>
                <p className='desc'>{description}</p>
                <h5 className='price'> $ {price}</h5>
            </div>
            <div className='amount'>
                <div className='amount-top'>
                    <p>Amount</p>
                    <p>1</p>
                </div>
                <div className='action-btn'>
                    <button>+ Add</button>
                </div>
            </div>
        </div>
    )
}

export default MealsItem
