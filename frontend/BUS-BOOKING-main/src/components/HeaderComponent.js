import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-transparent flex-row" style={{ marginRight: '20px', top:'-5px', left:'380px'}}>
                <div><a href="https://javaguides.net" className="navbar-brand" style={{ fontSize: '44px' }}>Bus Travel Ticketing System</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
