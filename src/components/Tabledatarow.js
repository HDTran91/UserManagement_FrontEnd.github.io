import React, { Component } from 'react';

class Tabledatarow extends Component {
    
    permissionshow = () => {
        if ((this.props.permission) === "1") {return "Admin ";}
        else if ((this.props.permission) === "2") {return "Morderator ";}
        else {return "Normal User ";}
    }
    
    
    //props.editFuncClick

    editClick = () =>{
        this.props.editFunClick();
        this.props.changeEditUserStatus();
    }

    deleteButtonClick =(idUser) => {
        // console.log("id cua phan tu la " + idUser);
        this.props.deleteButtonClick(idUser);
        
    }
    render() {
        return (
            
                <tr>
                    <td>{this.props.stt+1}</td>
                    <td>{this.props.username}</td>
                    <td>{this.props.tel}</td>
                    <td>
                        {this.permissionshow()}
                    </td>
                    <td>
                        <div onClick = {()=>this.editClick()} className="btn btn-warning sua"><i className="fa fa-edit" />Sua</div>
                        <div className="btn btn-danger xoa" onClick = {(idUser)=>this.deleteButtonClick(this.props.id)}><i className="fa fa-edit" />Xoa</div>
                    </td>
                </tr>
            
        );
    }
}

export default Tabledatarow;