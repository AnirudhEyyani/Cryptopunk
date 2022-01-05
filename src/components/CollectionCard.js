import React from 'react'
import weth from '../assets/weth.png'
import './collectionCard.css'

const CollectionCard = ({id, name, traits, image}) => {
    return (
        <div className='collectionCard'>
            <img src={image} alt='cryptopunk' />
            <div className='details'></div>
            <div className='name'>
                {name} <div className='id'>•#{id}</div>
            </div>
            <div className='priceContainer'>
                <img src={weth} className='wethImage' alt='ether'/>
                <div className='price'> {traits[0]?.value} </div>       
            </div>
        </div>
    )
}

export default CollectionCard
