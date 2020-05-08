import React from 'react'
const plane = require('../src/img/moin.png')

const Nav = () => {
    return (
        <nav className={'main-nav'}>
            <img src={plane} alt="name" />

            <div>
                <a href="https://facebook.com">
                    <i className={'fa-3x fab fa-facebook-square'}></i>
                </a>
                <a href="https://facebook.com">
                    <i className={'fa-3x fab fa-twitter-square'}></i>
                </a>
                <a href="https://facebook.com">
                    <i className={'fa-3x fab fa-youtube-square'}></i>
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
