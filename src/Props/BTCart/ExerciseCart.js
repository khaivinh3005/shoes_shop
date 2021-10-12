import React, { Component } from 'react'
import ProductList from './ProductList'
import Modal from './Modal'

export default class ExerciseCart extends Component {
    arrPhone = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]

    state = {
        sanPham : []
    }

    themSanPham = (spAdd) => {
        let spGioHang = {...spAdd,soLuong: 1}
        let capNhatGioHang = [...this.state.sanPham];
        let index = capNhatGioHang.findIndex((item,index)=> {
            return item.maSP === spGioHang.maSP
        })
        if(index !== -1) {
            capNhatGioHang[index].soLuong += 1
        }else {
            capNhatGioHang.push(spGioHang)
        }

        this.setState({
            sanPham : capNhatGioHang
        })
    }

    tangGiamSL = (maSP,tangGiam) => {
        let capNhatGioHang = [...this.state.sanPham];
        let index = capNhatGioHang.findIndex((item,index)=> {
            return item.maSP === maSP
        })
        if(tangGiam) {
            capNhatGioHang[index].soLuong +=1;
        }else {
            if(capNhatGioHang[index].soLuong > 1) {
                capNhatGioHang[index].soLuong -=1;
            }
        }

        this.setState({
            sanPham: capNhatGioHang
        })
    }

    xoaSanPham = (maSP) => {
        let capNhatGioHang = [...this.state.sanPham];
        let index = capNhatGioHang.findIndex((item,index)=> {
            return item.maSP === maSP
        })
        if(index !== -1){
            capNhatGioHang.splice(index,1)
        }

        this.setState({
            sanPham: capNhatGioHang
        })
    }

    render() {
        let soLuong = this.state.sanPham.reduce((total,item,index)=>{
                return total += item.soLuong;
        },0)
        return (
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-4" data-toggle="modal" data-target="#exampleModal">
                        <p>Giỏ hàng ({soLuong})</p>
                    </div>
                </div>
                <ProductList  arrPhone = {this.arrPhone} themSanPham={this.themSanPham} />
                <Modal xoaSanPham={this.xoaSanPham} tangGiamSL={this.tangGiamSL} sanPham = {this.state.sanPham} />
            </div>
        )
    }
}
