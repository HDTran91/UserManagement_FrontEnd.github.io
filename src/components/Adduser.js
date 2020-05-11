import React, { Component } from 'react';

class Adduser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangthaichinhsua: false
        }
    }
    thaydoitrangthai = () => {
        this.setState({
            trangthaichinhsua: !this.state.trangthaichinhsua
        })
    }

    hienthinut = () => {
        if (this.state.trangthaichinhsua === true) {
            return <div className="btn btn-block btn-info" onClick={() => this.thaydoitrangthai()}>Dong lai</div>;

        }
        else {
            return <div className="btn btn-block btn-info" onClick={() => this.thaydoitrangthai()}>Them moi</div>
        }
    }
    hienthiform = () => {
        if (this.state.trangthaichinhsua === true) {
            return (
                <div className="card text-left">
                    <div className="card border-primary mb-3 mt-2">
                        <div className="card-header">Them moi User vao he thong</div>
                        <div className="card-body text-primary">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Ten user" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Dien Thoai" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <select className="custom-select">
                                    <option value>Chon quyen mac dinh</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>moderator</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <div className="btn btn-primary">Them moi</div>
                            </div>
                        </div>
                    </div>
                </div>
            )


        }

    }
    render() {
        return (
            <div className="col-3">
                {this.hienthinut()}
                {this.hienthiform()}

            </div>
        );
    }
}

export default Adduser;