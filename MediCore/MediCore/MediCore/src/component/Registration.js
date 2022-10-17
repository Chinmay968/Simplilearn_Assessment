import React,{Component} from 'react';
import Navbar from './Navbar.js';
import {Variables} from './Variable.js';


export class Addmed extends Component{
    constructor(props){
        super(props);

        this.state={
            medicine:[],
            modalTitle:"",
            MedId:0,
            MedName:"",
            Medprice:0,
            Medimage:"",
            Medseller:"",
            Meddeiscription:"",
            PhotoPath:Variables.PHOTO_URL,
            PhotoFileName:"anonymous.png",
        }
    }
    
    refreshList(){
        
        fetch(Variables.API_URL+'Medicine')
        .then(response=>response.json())
        .then(data=>{
            this.setState({medicine:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }
    
    changeMedName =(e)=>{
        this.setState({MedName:e.target.value});
    }
    changeMedprice =(e)=>{
        this.setState({Medprice:e.target.value});
    }
    changeMedseller=(e)=>{
        this.setState({Medseller:e.target.value});
    }

    changeMeddescription=(e)=>{
        this.setState({Meddeiscription:e.target.value});
    }
   
    
    changeMedImage=(e)=>{
        e.preventDefault();
        this.setState({Medimage:e.target.value});

        const formData=new FormData();
        formData.append("file",e.target.files[0],e.target.files[0].name);

        fetch(Variables.API_URL+'Medicine/Savefile',{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(data=>{
            this.setState({PhotoFileName:data});
        })
    }

    createClick(){
        fetch(Variables.API_URL+'Medicine',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                med_name:this.state.MedName,
                med_price:this.state.Medprice,
                med_image:this.state.PhotoFileName,
                med_seller:this.state.Medseller,
                med_description:this.state.Meddeiscription,
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        }
        ,(error)=>{
            alert(error);
        }
        
        )
    }


    render(){
        const {
            user,
            modalTitle,
            MedId,
            MedName,
            Medprice,
            Medimage,
            Medseller,
            Meddeiscription,
            PhotoPath,
            PhotoFileName,
        }=this.state;

        return(
        <div>
            <Navbar/>

    
    
    <div className='a' style={{ backgroundColor:'rgb(162 162 229)'}}>
    <div className="d-flex flex-row bd-highlight mb-3" style={{marginLeft:'450px', marginTop:'1px'}}>
     
     <div className="p-2 w-50 bd-highlight">
    
        <div className="input-group mb-3">
            <span className="input-group-text">Medicine Name</span>
            <input type="text" className="form-control"
            value={MedName}
            onChange={this.changeMedName}/>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">Medicine Price</span>
            <input type="number" className="form-control"
            value={Medprice}
            onChange={this.changeMedprice}/>
        </div>

        <div className="input-group mb-3">
        
            <span className="input-group-text">Medicine image</span>
            <input type="file" className="form-control"
            value={Medimage}
            onChange={this.changeMedImage}/>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">Medicine Seller</span>
            <input type="text" className="form-control"
            value={Medseller}
            onChange={this.changeMedseller}/>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">Medicine Descrpition</span>
            <input type="text" className="form-control"
            value={Meddeiscription}
            onChange={this.changeMeddescription}/>
        </div>


     </div>
    

    <button type="button"
        className="btn btn-primary float-start"
        onClick={()=>this.createClick()}
        >Add</button>
</div>
</div>
</div>


        )
    }
}