import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { Variables } from './Variable';
import './Meddetail.css';



export class Medicine extends Component{
    constructor(props){
        super(props)

        this.state={
            medicines:[],
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

    render(){
        const
        {
            medicines,
            PhotoPath
        }=this.state;
        return(
            <div className='App'>
                <Navbar/>
                <div>
                    <table className='table table-stripped' >
                        <thead >
                            <tr>
                            <th style={{backgroundColor:'#e2e2eb'}}>
                                   Image
                                </th>
                                <th style={{backgroundColor:'#e2e2eb'}}>
                                    <input className='form-control m-2' style={{paddingRight:'360px', backgroundColor:'rgb(178 201 209)',color:'purple'}}
                                    onChange={this.changeMedicineName} 
                                    placeholder="Search "/>
                                    Name
                                </th>                         
                                <th style={{backgroundColor:'#e2e2eb'}}>
                                    Descrpition
                                </th>
                                <th style={{backgroundColor:'#e2e2eb'}}>
                                    Seller
                                </th>                                
                                <th style={{backgroundColor:'#e2e2eb'}}>
                                    Price
                                </th>
                                <th style={{backgroundColor:'#e2e2eb'}}>
                                    Option
                                </th>
                            </tr>
                        </thead>
                       
                        <tbody style={{backgroundColor:'lightblue'}} >
                            {medicines.map(med =>
                                <tr key={med.med_id} >
                                    <td>
                                        <img height='150px' src={PhotoPath+med.med_image}/>
                                    </td>
                                    <td>
                                        {med.med_name}
                                    </td> 
                                    <td>
                                        {med.med_description}
                                    </td>                                 
                                    <td>
                                        {med.med_seller}
                                    </td>                                    
                                    <td>
                                        {med.med_price}
                                    </td>
                                    <td>
                                        <Link className='btn btn-success' to={`/medicine/${med.med_id}`}>Buy</Link>    
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
