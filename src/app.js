'use strict'
import React, { Component } from 'react'
import AppContent from './components/app-content'

class App extends Component {

    constructor(){
        super()
        this.state = {
            userinfo: {
                username: 'Crystyano Almeida',
                repos: 12,
                followers: 0,
                following: 1
            },
            repos : [{
                name: 'Repos',
                link: 'haha'
            }],
            starred: [{
                name: 'St',
                link: 'haha'
            }]
        }
    }

    render() {
        return (
            <AppContent 
            userinfo={this.state.userinfo}
            repos={this.state.repos}
            starred={this.state.starred}
            />
        )
    }
}

export default App