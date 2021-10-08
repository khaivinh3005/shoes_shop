import React, { Component } from 'react'

export default class Modal extends Component {

    render() {
        let {mang} = this.props;
        return (
            //             <!-- Button trigger modal -->
            // <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            //   Launch demo modal
            // </button>

            // <!-- Modal -->
            <div className="modal fade" id="exampleModal" style={{top:"30%"}} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Chi tiết sản phẩm</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="card">
                                <img src={mang.url} alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">Tên sản phẩm : {mang.name}</h6>
                                    <p className="card-text">Giá: ${mang.price}</p>
                                </div>
                            </div>
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
