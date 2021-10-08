import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="container-fluid text-center py-3" style={{backgroundColor:"rgba(0,0,0,0.8)"}}>
                <h1 className="text-light">Title Glasses</h1>
            </div>
        )
    }
}
