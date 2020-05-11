import React from 'react'
const plane = require('../src/img/sun-weather.gif')

const Header = () => {
    return (
        <header className={'header'}>
            <img src={plane} alt="rainy" className="" />
        </header>
    )
}

export default Header
