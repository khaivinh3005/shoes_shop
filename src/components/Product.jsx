import React, { Component } from 'react'

export default class Product extends Component {
    evenClick = (message) => {
        alert(message);
    }



    render() {
        let message = "Hello Da Nang";

        return (
            <div className="container">
                <form>
                    <input id="hello" type="number" placeholder="nhap so" />
                </form>
                <button onClick={this.evenClick.bind(this,message)}>Click</button>
            </div>
        )
    }
}

