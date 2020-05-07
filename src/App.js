import React from 'react'
import { render } from 'react-dom'
import Nav from '../components/nav'

export default function App() {
    return (
        <div className={'container'}>
            <Nav />
        </div>
    )
}

render(React.createElement(App), document.getElementById('root'))
