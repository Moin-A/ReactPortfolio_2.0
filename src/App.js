import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
import Nav from './Nav'

const App = () => {
    const [animal, setanimal] = useState('null')

    return (
        <div className={'container'}>
            <Nav />
        </div>
    )
}

render(React.createElement(App), document.getElementById('root'))
