import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        let { sanPham,tangGiamSL,xoaSanPham} = this.props;
        return (
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Mã sản phẩm</th>
                                        <th scope="col">Hình ảnh</th>
                                        <th scope="col">Tên Sản Phẩm</th>
                                        <th scope="col">Số lượng</th>
                                        <th scope="col">Đơn giá</th>
                                        <th scope="col">Thành tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sanPham.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <th scope="row">{item.maSP}</th>
                                                <td><img src={item.hinhAnh} width={80} height={80} alt="..." /></td>
                                                <td>{item.tenSP}</td>
                                                <td>
                                                    <button onClick={()=>tangGiamSL(item.maSP,true)} className="btn btn-success">+</button>
                                                    <span>{item.soLuong}</span>
                                                    <button onClick={()=>tangGiamSL(item.maSP,false)} className="btn btn-success">-</button>
                                                </td>
                                                <td>{item.giaBan.toLocaleString()}</td>
                                                <td>{(item.giaBan * item.soLuong).toLocaleString()}</td>
                                                <td><button onClick={() => xoaSanPham(item.maSP)} className="btn btn-danger">Xoa</button></td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
