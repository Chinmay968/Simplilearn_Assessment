import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { Variables } from "./Variable";
import './Meddetail.css';


export default function MedDetail(props){
    const path = Variables.PHOTO_URL;
    const {id} = useParams();
    let [buydata,setbuydata]=React.useState([])
    axios.get(`https://localhost:7220/api/Buy?id=${id}`).then(respone => {
        setbuydata(respone.data)

    })

    return(
        <div>
            <Navbar/>
        
            {buydata.map(med=>
                
                     <div class="card-block" style={{marginTop:'5px'}}>
                        <u><h2 className="name">{med.med_name}</h2></u>
                        <h3 className="sp" >Seller:</h3> <p className="desc">{med.med_seller}.</p>
                        <h3 className="sp">Descrpition:</h3> <p className="desc">{med.med_description}.</p>
                        <h3 className="sp">Price:</h3> <p className="desc">Rs <span className="price" color="green">{med.med_price}/-</span></p>
                       <br/>
                       <a href="/PayNow" class="btn btn-success btn-sm float-right" ><span className="pay-btn">Pay Now</span></a>
                     </div>
                   
              
             
            
                )}
            

         </div>
    )
}