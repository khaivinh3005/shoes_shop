import React, { Component } from 'react'

export default class PhoneItem extends Component {
    render() {
        let {phone,infoPhone} = this.props;
        return (
            <div className="col-4" key={phone.maSP}>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={phone.hinhAnh} className="card-img-top" alt={phone} />
                        <div className="card-body">
                            <h5 className="card-title">{phone.tenSP}</h5>
                            <p className="card-text">{phone.giaBan}</p>
                            <a onClick={()=>infoPhone(phone)} href="#" className="btn btn-primary">Xem Chi Tiet</a>
                        </div>
                    </div>
                </div>
        )
    }
}
