import React, { Component } from 'react'

export default class BaiTapProps extends Component {
    

    showBuy = (text) => {
        console.log(text)
    }

    render() {
        return (
            <div className="card col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{ width: '18rem' }}>
                <img  src={this.props.img} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.children}</h5>
                    <p className="card-text">{this.props.price}</p>
                    <a href="#" className="btn btn-primary" onClick = {this.showBuy.bind(this,this.props.price)}>Buy</a>
                </div>
            </div>
        )
    }
}
