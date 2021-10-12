import React, { Component } from 'react'
import dataPhone from '../Data/dataPhone.json'
import PhoneItem from './PhoneItem'
import ChiTietSanPham from './ChiTietSanPham'

export default class BTXemChiTiet extends Component {

    state = {
        chiTietPhone: 
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        hinhAnh: "./img/vsphone.jpg"
    }

    infoPhone = (phone) => {
        this.setState({
            chiTietPhone : phone,
            hinhAnh : phone.hinhAnh
        })
    }

    renderPhoneList = () => {
        return dataPhone.map((phone, index) => {
            return (
                <PhoneItem infoPhone={this.infoPhone} phone={phone} />
            )
        })
    }
    render() {

        return (
            <div className="container-fluid">
                <div className="row">
                   {this.renderPhoneList()}
                </div>
                <div className="row mt-5">
                    <div className="col-4 text-center">
                        <h3>{this.state.chiTietPhone.tenSP}</h3>
                        <img src={this.state.hinhAnh} className="img-fluid" alt="..." />
                    </div>
                    <ChiTietSanPham chiTietPhone={this.state.chiTietPhone} />
                </div>
            </div>
        )
    }
}
