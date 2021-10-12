import React, { Component } from 'react'
import ShoesList from './ShoesList'
import Modal from './Modal'

export default class ShoesStore extends Component {
    state = {
        gioHang:  [
        ]
    }

    addShoes = (sp) => {
        let shoes = {...sp,"sl" : 1};
        let updateCart = [...this.state.gioHang];
        let index = updateCart.findIndex((shoe)=> {
            return shoe.id === shoes.id
        })
        if(index !== -1) {
            updateCart[index].sl += 1
        }else {
            updateCart.push(shoes);
        }

        this.setState({
            gioHang: updateCart
        })
    }


    render() {
        let soLuong = this.state.gioHang.reduce((total,item,index) => {
            return total += item.sl
        },0)
        return (
            <div className="container" >
                <div className="row justify-content-md-end">
                    <div className="col-4 text-center">
                       <h1> Shoes Shop </h1>
                    </div>
                    <div className="col-4 text-right mt-5" style={{cursor:"pointer"}} data-toggle="modal" data-target="#exampleModal">
                        <h3 class="fa fa-shopping-cart"></h3>({soLuong})
                    </div>
                </div>
                <div className="row">
                    <ShoesList addShoes={this.addShoes} />
                </div>
                <Modal gioHang={this.state.gioHang} />
            </div>
        )
    }
}
