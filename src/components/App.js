import React,{Component} from 'react';
import './App.css';
import Header from './Header';
import Search from './Search';
import Table from './Table';
import Adduser from './Adduser';
import AdduserkhacComp from './AdduserkhacComp';
import Datauser from './Data.json';
import { v1 as uuidv1 } from 'uuid';



class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
        hienthiform: false,
        trangthaichinhsua:false,
        data: [],
        SearchText:"",
        //suathongtin
        editUserStatus: false,
        //load noi dung can sua vao form
        userEditObject:{}
    }
  }
  // thongbao = () => {console.log("ket noi thanh cong")};

  
  componentWillMount() {
    //kiem tra xem co localstorage nay chua
    if (localStorage.getItem('userData') === null) {
      localStorage.setItem('userData',JSON.stringify(Datauser));
    }
    else {
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data: temp
      })
    }
  }
  

  doitrangthai = () => {
    this.setState({
      hienthiform: !this.state.hienthiform
    })
  }

  getTextSearch = (dl) => {
    this.setState({
      SearchText: dl
    })
    
    
  }
  getNewUserData = (name,tel,permission) => {
    var item ={};
    item.id = uuidv1();
    item.name= name;
    item.tel = tel;
    item.permission = permission;
    var items = this.state.data;
    items.push(item);
    console.log(items);
    this.setState({
      data: items
    });
    localStorage.setItem('userData',JSON.stringify(items))
    
    
  }

  //Sua thong tin

  editUser = (user) => {
    // console.log("da ket noi ok");
    this.setState({
      userEditObject:user
    })
    
    
  }
  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    })
  }


  getUserEditInfoApp = (info) => {
    // console.log("thong tin da sua xong la " + info.name);
    this.state.data.forEach((value,key)=>{
      if (value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
      
    })
    

    localStorage.setItem('userData',JSON.stringify(this.state.data));
  }
  
  deleteUser = (idUser) => {
    // console.log(idUser);
    var tempData = this.state.data;
    tempData = tempData.filter(item => item.id !== idUser)
    console.log(tempData);
    this.setState({
      data: tempData
    })

    //luu vao gia tri vo localstorage moi khi khi thay doi
    localStorage.setItem('userData',JSON.stringify(tempData))
    
  //   tempData.forEach((value,key) =>{
  //     if (value.id === idUser) {
     //tempData.delete
        
  // })
    
  }
  render() {

  // localStorage.setItem("userData",JSON.stringify(Datauser));
  // console.log(localStorage.getItem("key1"));
  // localStorage.removeItem("key1");

  console.log(this.state.data);
  
  

  
  // tim theo tu khoa tim kiem
  var ketqua = [];
  this.state.data.forEach((item) => {
    if (item.name.indexOf(this.state.SearchText) !== -1) {
      ketqua.push(item);
    } 
  })
  // console.log(ketqua);
  

  
  return (
    <div>
      <Header/>
      <div className="container">
        <div className="row">
          <Search 
          getUserEditInfoApp = {(info)=>this.getUserEditInfoApp(info)}
          userEditObject = {this.state.userEditObject}
          getTextSearchprops = {(dl)=>this.getTextSearch(dl)}
          ketnoi ={()=>this.doitrangthai()} hienthiform = {this.state.hienthiform}
          editUserStatus = {this.state.editUserStatus}
          changeEditUserStatus = {()=>this.changeEditUserStatus()} />
          <div className="col-12"><hr /></div>
          <Table 
          deleteUser = {(idUser)=>this.deleteUser(idUser)}
          changeEditUserStatus = {()=>this.changeEditUserStatus()} editFun = {(user)=>this.editUser(user)} dataUserProps= {ketqua}/>
          <AdduserkhacComp add={(name,tel,permission)=>this.getNewUserData(name,tel,permission)} hienthiform ={this.state.hienthiform} />
        </div>
        

      </div>
    </div>
  );
}
}


export default App;
