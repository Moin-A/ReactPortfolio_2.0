import React from 'react'
import { render } from 'react-dom'

export default function App() {
    return React.createElement(
        'div',
        {},
        React.createElement('p', {}, 'This is a text')
    )
}

render(React.createElement(App), document.getElementById('root'))
