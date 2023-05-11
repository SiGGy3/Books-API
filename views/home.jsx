const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
              <h1>Hello world</h1>
                <div>
                    <img id='cat' src="https://content.kaspersky-labs.com/lp/press-releases/2022/Beluga%20cat.jpg" alt="Beluga the cat" />  
                </div>
            </main>
        </Def>
    )
}

module.exports = home