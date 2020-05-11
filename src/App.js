import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
import Nav from './Nav'
import Header from './Header'

const App = () => {
    const [animal, setanimal] = useState('null')

    return (
        <div className={'container'}>
            <Header />
            <Nav />

            <div>
                <p>
                    {
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nam labore iusto ad. Repellat magni, veniam tempore asperiores atque fuga! Fugiat dolore inventore nisi explicabo iste tempore repudiandae earum quos?'
                    }
                </p>
            </div>
        </div>
    )
}

render(React.createElement(App), document.getElementById('root'))
