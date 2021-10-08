import React, { Component } from 'react'


export default class Footer extends Component {

    renderGlass = () => {
        return this.props.dataGlasses.map((item, index) => {
            return (
                <div className="col-2 m-2" key={index} onClick={()=>this.props.clickGlass(item)} data-toggle="modal" data-target="#exampleModal">
                    <img src={item.url} style={{ width: "150px" }} alt="" />
                </div>
            )
        })
    }
    render() {
        return (
            <div className="container mt-5 footer text-center">
                <div className="row">
                    {this.renderGlass()}
                </div>
            </div>
        )
    }
}
