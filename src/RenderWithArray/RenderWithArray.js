import React, { Component } from 'react'

export default class RenderWithArray extends Component {
    products = [
        { id: 1, name: 'black car', price: 1000, img: "./img/black-car.jpg" },
        { id: 2, name: 'red car', price: 2000, img: "./img/red-car.jpg" },
        { id: 3, name: 'silver car', price: 3000, img: "./img/silver-car.jpg" },
        { id: 3, name: 'Steel car', price: 4000, img: "./img/steel-car.jpg" }
    ];


    renderTable = () => {
        //content (chứa các đối tượng tr)
        // let content = [];

        // //Duyet mang
        // for(let i = 0; i < this.products.length ; i++) {
        //     let product = this.products[i];
        //     let objTR = 
        // <tr>
        //     <td>{product.id}</td>
        //     <td>{product.name}</td>
        //     <td><img src={product.img} className="w-25" alt="" /></td>
        //     <td>{product.price}</td>
        // </tr>
        //     content.push(objTR);
        // }
        // return content;

       return this.products.map((product, index) => {
            return (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td><img src={product.img} className="w-50" alt="" /></td>
                    <td>{product.price}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="container">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Tạo UI bằng code js trong inline */}
                        {/* {this.products.map((item,index)=>{
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td><img src={item.img} width={90} height={90} alt="" /></td>
                                    <td>{item.price}</td>
                                </tr>
                            )
                        })} */}
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}
