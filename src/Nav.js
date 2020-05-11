import React, { useState } from 'react'
const plane = require('../src/img/coffee.png')
import useDocumentScrollThrottled from './useDocumentScrollThrottled'

const Nav = () => {
    const [shouldHideHeader, setShouldHideHeader] = useState(false)
    const [shouldShowShadow, setShouldShowShadow] = useState(false)

    useDocumentScrollThrottled((callbackData) => {
        const { previousScrollTop, currentScrollTop } = callbackData
        const isScrolledDown = previousScrollTop < currentScrollTop

        setShouldShowShadow(currentScrollTop > 210)

        setShouldHideHeader(isScrolledDown)
    })

    const shadowStyle = shouldShowShadow ? 'shadow' : ''
    const hiddenStyle = shouldHideHeader ? 'issticky' : ''
    return (
        <nav className={`main-nav ${hiddenStyle} ${shadowStyle}`}>
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
