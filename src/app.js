'use strict'
import React, { Component } from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

class App extends Component {

    constructor() {
        super()
        this.state = {
            userinfo: null,
            repos: [],
            starred: [],
            isFetching: false
        }
    }

    getGitHubApiUrl(username, type) {
        const internalUsername = username ? `/${username}` : ''
        const internalType = type ? `/${type}` : ''
        return `https://api.github.com/users${internalUsername}${internalType}`
    }

    handleSearch(e) {
        const value = e.target.value
        const keyCode = e.which || e.keyCode //verificando qual é o código da tecla pressionada
        const ENTER = 13

        if (keyCode === ENTER) {
            this.setState({ isFetching: true })
            ajax().get(this.getGitHubApiUrl(value))
                .then((result) => {
                    this.setState({
                        userinfo: {
                            username: result.name,
                            photo: result.avatar_url,
                            github: result.login,
                            repos: result.public_repos,
                            followers: result.followers,
                            following: result.following
                        },
                        repos: [],
                        starred: []
                    })
                })
                .always(() => this.setState({ isFetching = false }))
        }
    }

    getRepos(type) {
        return (e) => {
            const username = this.state.userinfo.github
            ajax().get(this.getGitHubApiUrl(username, type))
                .then((result) => {
                    this.setState({
                        [type]: result.map((repo) => ({
                            name: repo.name,
                            link: repo.html_url
                        }))
                    })
                })
        }
    }

    render() {
        return (
            <AppContent
                userinfo={this.state.userinfo}
                repos={this.state.repos}
                starred={this.state.starred}
                isFetching={this.state.isFetching}
                handleSearch={(e) => this.handleSearch(e)}
                getRepos={this.getRepos('repos')}
                getStarred={this.getRepos('starred')}
            />
        )
    }
}

export default App