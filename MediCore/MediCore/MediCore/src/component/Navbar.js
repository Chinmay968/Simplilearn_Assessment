import React from 'react';
import { Link } from 'react-router-dom';

const Navbar =() =>{
    return(
        <div >
            <nav className='navbar navbar-expand-sm navbar-dark' style={{backgroundColor:'#628a97',}} > 
            
                    <h2 style={{color:"white",marginLeft:"70px"}}>MEDICORE</h2>
            
              <ul className='navbar-nav'>
                
                <div >
                <li className='nav-item m-1' >
                    <Link className='btn btn-success btn-outline-light' to='/admin'  style={{marginLeft:'900px'}}>Admin</Link>
                </li>
                </div>
                <div>
                <li className='nav-item m-1'>
                    <Link className='btn btn-primary btn-outline-light' to='/'>User</Link>
                </li>
                </div>
                <div>
                <li className='nav-item m-1'>
                    <Link className='btn btn-primary btn-outline-light' to='/login'>Login</Link>
                </li>
                </div>
              </ul>
              {/* <h5 align="right" style={{color:"white",textAlign:"right",paddingLeft:'780px'}}>Helpline No : 1800-1800-999</h5> */}
            </nav>
        </div>
    )
}
export default Navbar