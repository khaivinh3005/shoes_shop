import React, { Component } from 'react'

export default class Body extends Component {
    render() {
        let {glass} = this.props;
        return (
            <div className="container">
                <div className="row text-center">
                    <div className="col-6" style={{position:"relative"}}>
                        <img src="./glassesImage/model.jpg" style={{width:"300px"}} alt="" />  
                        <div className="glass" style={{position:"absolute",top:"27%",left:"37%"}}>
                            <img src={glass} style={{width:"150px"}} alt="" />  
                        </div>
                    </div>
                    <div className="col-6">
                        <img src="./glassesImage/model.jpg" style={{width:"300px"}} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}
