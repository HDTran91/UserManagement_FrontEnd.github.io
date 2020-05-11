import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state ={
            id:this.props.userEditObject.id,
            name:this.props.userEditObject.name,
            tel:this.props.userEditObject.tel,
            permission:this.props.userEditObject.permission
        }
    }
    
    isChange=(event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
        
    }

    saveButton = () => {
        
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permission = this.state.permission;
        this.props.getUserEditInfo(info)
        this.props.changeEditUserStatus(); //an form
        

    }
    //props.userEditObject
    render() {
        // console.log(this.props.userEditObject.name);
        // console.log(this.props.userEditObject.tel);
        // console.log(this.props.userEditObject.permission);
        // console.log(this.state);
        
       
        return (
            <div className="row">
                <div className="col-12">
                    <form>
                        <div className="card text-left">
                            <div className="card text-white bg-warning mb-3">
                                <div className="card-header text-center">Sua Thong tin user</div>
                                <div className="card-body text-primary">
                                    <div className="form-group">
                                        <input onChange = {(event)=>this.isChange(event) } defaultValue={this.props.userEditObject.name} type="text" name="name" className="form-control" placeholder="Ten user" aria-describedby="helpId" />
                                    </div>
                                    <div className="form-group">
                                        <input onChange = {(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.tel} type="text" name="tel" className="form-control" placeholder="Dien Thoai" aria-describedby="helpId" />
                                    </div>
                                    <div className="form-group" >
                                        <select className="custom-select" name="permission" onChange = {(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.permission}>
                                            <option value>Chon quyen mac dinh</option>
                                            <option value={1}>Admin</option>
                                            <option value={2}>moderator</option>
                                            <option value={3}>Normal</option>
                                        </select>
                                    </div>
                                    <div className="form-group text-center">
                                        <input type="button" className="btn btn-danger " value="Luu" onClick = {()=>this.saveButton()} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditUser;