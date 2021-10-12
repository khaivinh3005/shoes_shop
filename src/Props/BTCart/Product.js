import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        let {item,themSanPham} = this.props;
        return (
            <div className="card">
                <img src={item.hinhAnh} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.tenSP}</h5>
                    <p className="card-text">{item.giaBan}</p>
                    <a href="#" className="btn btn-danger" onClick={()=>themSanPham(item)} >Thêm giỏ hàng</a>
                </div>
            </div>
        )
    }
}
