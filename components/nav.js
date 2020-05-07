import React from 'react'
const plane = require('../src/img/moin.png')

const Nav = () => {
    return (
        <nav className={'main-nav'}>
            <div>
                <img src={plane} alt="name" />
            </div>
            <div>
                <a href="https://facebook.com">
                    <i className={'fab fa-facebook-square'}></i>
                </a>
                <a href="https://facebook.com">
                    <i className={'fab fa-twitter-square'}></i>
                </a>
                <a href="https://facebook.com">
                    <i className={'fab fa-youtube-square'}></i>
                </a>
            </div>
            <ul>
                <li>
                    <a href="index.html">Home</a>
                </li>
                <li>
                    <a href="index.html">Home</a>
                </li>
            </ul>
        </nav>
    )
}
export default Nav
