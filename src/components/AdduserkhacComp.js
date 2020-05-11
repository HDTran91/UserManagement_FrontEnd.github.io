import React, { Component } from 'react';

class AdduserkhacComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            tel: "",
            permission: ""

        }
    }




    //lay du lieu ve
    ischange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name);
        // console.log(value);
        this.setState({
            [name]: value
        })
        // var item={}
        // item.id = this.state.id;
        // item.name = this.state.name;
        // item.tel = this.state.tel;
        // item.permission = this.state.permission;



    }

    kiemtratrangthai = () => {
        if (this.props.hienthiform === true) {
            return (

                <div className="col-12">
                    <form>
                        <div className="card text-left">
                            <div className="card border-primary mb-3">
                                <div className="card-header">Them moi User vao he thong</div>
                                <div className="card-body text-primary">
                                    <div className="form-group">
                                        <input type="text" onChange={(event) => this.ischange(event)} name="name" className="form-control" placeholder="Ten user" aria-describedby="helpId" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" onChange={(event) => this.ischange(event)} name="tel" className="form-control" placeholder="Dien Thoai" aria-describedby="helpId" />
                                    </div>
                                    <div className="form-group">
                                        <select className="custom-select" name="permission" onChange={(event) => this.ischange(event)}>
                                            <option value>Chon quyen mac dinh</option>
                                            <option value={1}>Admin</option>
                                            <option value={2}>moderator</option>
                                            <option value={3}>Normal</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input type="reset" className="btn btn-primary" onClick={(name,tel,permission) => this.props.add(this.state.name, this.state.tel, this.state.permission)} value="them moi" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            )
        }
    }

    render() {
        // console.log(this.props.hienthiform);
        // console.log(this.state);


        return (

            <div>
                {
                    this.kiemtratrangthai()
                }
            </div>

        );
    }
}

export default AdduserkhacComp;