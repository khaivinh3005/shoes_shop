import React, { Component } from 'react'

export default class Shoe extends Component {
    render() {
        let {sp} = this.props;
        return (
            <div className="col-4 mb-4">
                    <div className="card">
                        <img src={sp.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{sp.name}</h5>
                            <p className="card-text">$ {sp.price}</p>
                            <a href="#" className="btn btn-dark" onClick={()=> this.props.addShoes(sp)}>add ToCart </a>
                        </div>
                    </div>
                </div>
        )
    }
}
