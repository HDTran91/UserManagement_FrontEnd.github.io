import React, { Component } from 'react';
import Tabledatarow from './Tabledatarow.js';

class Table extends Component {
    deleteButtonClick = (idUser) => {
        
        this.props.deleteUser(idUser);
    }
    
    mappingDataUser = () => 
        this.props.dataUserProps.map((value,key) => (
            <Tabledatarow  
            deleteButtonClick = {(idUser)=>this.deleteButtonClick(idUser)}
            changeEditUserStatus = {()=>this.props.changeEditUserStatus()} editFunClick = {(user)=>this.props.editFun(value)} username = {value.name} tel = {value.tel} permission = {value.permission} key={key} stt ={key} id ={value.id} />
        ))
    
    // this.props.editFunc
    render() {
        
        // console.log(this.props.dataUserProps);
        
        return (
            <div className="col">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Ten</th>
                            <th>Dien Thoai</th>
                            <th>Quyen</th>
                            <th>Thao tac</th>
                        </tr>
                    </thead>
                    <tbody>
                       {this.mappingDataUser()}
                        
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;