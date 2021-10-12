import React, { Component } from 'react'
import Product from './Product'

export default class ProductList extends Component {
    render() {
        let { arrPhone,themSanPham} = this.props;

        return (
            <div className="row">
                {arrPhone.map((item, index) => {
                    return (
                        <div className="col-4" key={item.maSP}>
                           <Product themSanPham={themSanPham} item ={item}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}
