import React from 'react'

const MealsItem = ({ name, description, price }) => {
    return (
        <div className='meals-item'>
            <h5>{name}</h5>
            <p>{description}</p>
            <h5 className='price'> $ {price}</h5>
        </div>
    )
}

export default MealsItem
