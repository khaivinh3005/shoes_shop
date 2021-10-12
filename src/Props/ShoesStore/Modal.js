import React, { Component } from 'react'

export default class Modal extends Component {
    // renderGioHang = () => {
    //     return this.props.gioHang.map((sp, index) => {
    //         return (
               
    //         )
    //     })
    // }

    render() {
        let {gioHang} = this.props
        
        return (
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Chi Tiết sản phẩm</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Mã sản phẩm</th>
                                        <th scope="col">Tên sản phẩm</th>
                                        <th scope="col">Hình ảnh</th>
                                        <th scope="col">Số lượng</th>
                                        <th scope="col">Giá bán</th>
                                        <th scope="col">Thành tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   {gioHang.map((sp,index)=>{
                                       return (
                                           <tr>
                                               <td>{sp.id}</td>
                                               <td>{sp.name}</td>
                                               <td style={{padding:"0 0.75rem"}}><img src={sp.image} alt="" width={70} height={70} /></td>
                                               <td>{sp.sl}</td>
                                               <td>{sp.price}</td>
                                               <td>{sp.price * sp.sl}</td>
                                           </tr>
                                       )
                                   })}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan="5"></td>
                                        <td>Tổng tiền</td>
                                        <td>${gioHang.reduce((total,item,index)=>{
                                            return total += item.sl* item.price
                                        },0)}</td>
                                    </tr>
                                </tfoot>
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
