import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { Variables } from './Variable';
import './Meddetail.css';



export class Admin extends Component{
    constructor(props){
        super(props)

        this.state={
            medicines:[],
            modalTitle:"",
            PhotoPath:Variables.PHOTO_URL,
            MedicineName:"",
            withoutfilter:[]
        }

    }

    Filter()
    {
        var MedicineName = this.state.MedicineName;
        var filtereddata = this.state.withoutfilter.filter(
            function(fl){
                return fl.med_name.toString().toLowerCase().includes(
                    MedicineName.toString().trim().toLowerCase()
                )
            }
        );
        this.setState({medicines:filtereddata});


    }

    changeMedicineName = (e) =>{
        this.state.MedicineName = e.target.value;
        this.Filter();
    }

    refreshlist(){
        fetch(Variables.API_URL+'Medicine')
        .then(response=>response.json())
        .then(data=>{
            this.setState({medicines:data,withoutfilter:data});
        });
    }

    componentDidMount(){
        this.refreshlist();
    }

    deleteClick(id){
        if(window.confirm('Are you sure?')){
        fetch(Variables.API_URL+'Medicine?id='+id,{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
        .then(window.location.reload())
        }
    }


    render(){
        const
        {
            medicines,
            PhotoPath
        }=this.state;
        return(
            <div className='App'>
                <Navbar/>
                <div style={{marginTop:'20px',marginBottom:'20px'}}>
                    
                    <a href="/admin/add
                    " class="btn btn-primary btn-sm float-right"><span className="add-btn">
                     Add Medicine
                    </span></a>

                    <a style={{marginLeft:"10px"}} href="/admin
                    " class="btn btn-info btn-sm float-right"><span className="add-btn">
                     Admin
                    </span></a>

                    <a style={{marginLeft:"10px"}} href="/admin/userlist
                    " class="btn btn-info btn-sm float-right"><span className="add-btn">
                     User list
                    </span></a>
                                    
                  
                    <table className='table table-stripped'>
                        <thead>
                            <tr>
                            <th style={{backgroundColor:'#e2e2eb'}}>
                                   Image
                                </th>
                                <th style={{backgroundColor:'#e2e2eb'}}>
                                    <input className='form-control m-2' style={{backgroundColor:'rgb(178 201 209)'}}
                                    onChange={this.changeMedicineName} 
                                    placeholder="Search"/>
                                    Name
                                </th>
                                <th style={{backgroundColor:'#e2e2eb'}}>
                                    Price
                                </th>
                                {/* <th style={{backgroundColor:'#e2e2eb'}}>
                                   Image
                                </th> */}
                                <th style={{backgroundColor:'#e2e2eb'}}>
                                    Seller
                                </th>
                                <th style={{backgroundColor:'#e2e2eb'}}>
                                    Descrpition
                                </th>
                                <th style={{backgroundColor:'#e2e2eb'}}>
                                    Option
                                </th>
                               
                            </tr>
                        </thead>
                        <tbody style={{backgroundColor:'lightblue'}}>
                            {medicines.map(med =>
                                <tr key={med.med_id}>
                                    <td>
                                        <img height='150px' src={PhotoPath+med.med_image}/>
                                    </td>
                                    <td>
                                        {med.med_name}
                                    </td>
                                    <td>
                                        {med.med_price}
                                    </td>
                                    {/* <td>
                                        <img height='150px' src={PhotoPath+med.med_image}/>
                                    </td> */}
                                    <td>
                                        {med.med_seller}
                                    </td>
                                    <td style={{width:"220px"}}>
                                        {med.med_description}
                                    </td>
                                    <td>
                                    <button type='button' className='btn btn light mr-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
                                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
                                    </svg>
                                    </button>
                                    <button type='button' className='btn btn light mr-1'
                                     onClick={()=>this.deleteClick(med.med_id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                    </svg>
                                    </button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                            




                </div>
            </div>
        )
    }    
}
