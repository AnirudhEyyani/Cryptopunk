import React from 'react'
import './Header.css'
import punklogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'

const Header = () => {
    return (
        <div className='header'>
            <div className='logoContainer'>
                <img src={punklogo} className='punklogo' alt='' />
            </div> 
            <div className='searchBar'>
                <div className='searchIconContainer'>
                    <img src={searchIcon} />
                </div>
                <input className='searchInput' />
            </div>
        </div>
    )
}

export default Header
