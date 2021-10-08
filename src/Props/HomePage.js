import React, { Component } from 'react'
import Product from './Product'
import ProductFunction from './ProductFunction';

export default class HomePage extends Component {
    products = [
        { id: 1, name: 'black car', price: 1000, img: "./img/black-car.jpg" },
        { id: 2, name: 'red car', price: 2000, img: "./img/red-car.jpg" },
        { id: 3, name: 'silver car', price: 3000, img: "./img/silver-car.jpg" },
        { id: 3, name: 'Steel car', price: 4000, img: "./img/steel-car.jpg" }
    ];

    render() {
        return (
            <div className="container">
                <div className="row">
                        {/* <Product products ={this.products} /> */}
                        <ProductFunction products ={this.products} />
                </div>
            </div>
        )
    }
}
