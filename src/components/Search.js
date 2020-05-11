import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: "",
            userObj:{}
        }
    }

    //props.getUserEditInfoApp

    //de nhan dc thong tin
    getUserEditInfo = (info)=>{
        this.setState({
            userObj: info
        })
        this.props.getUserEditInfoApp(info);
        
    }
    //props.changeEditUserStatus
    //props.userEditObject

    isShowEditForm =() => {
        if (this.props.editUserStatus === true) {
            return <EditUser
            getUserEditInfo = {(info)=>this.getUserEditInfo(info)}
            userEditObject = {this.props.userEditObject}
            changeEditUserStatus = {()=>this.props.changeEditUserStatus()}/>
        }
    }

    ischange = (event) => {
        this.setState({
            tempValue: event.target.value
        });
        // tim luon du lieu trong qua trinh go

        this.props.getTextSearchprops(this.state.tempValue);

    }

    hienthinut = () => {
        if (this.props.hienthiform === true) {
            return <div className="btn btn-block btn-info" onClick={() => this.props.ketnoi()}>Dong lai</div>;

        }
        else {
            return <div className="btn btn-block btn-danger" onClick={() => this.props.ketnoi()}>Them moi</div>;
        }
    }
    render() {
        return (
            <div className="col-12">
                {this.isShowEditForm()}
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" onChange={(event) => this.ischange(event)} placeholder="Nhap tu khoa tim kiem" aria-describedby="helpId" style={{ width: '500px' }} />
                        <div className="btn btn-info" onClick={(dl) => this.props.getTextSearchprops(this.state.tempValue)}>Tim kiem</div>

                    </div>
                    <div className="btn-group1">

                        {this.hienthinut()}

                    </div>
                </div>

            </div>
        );
    }
}

export default Search;