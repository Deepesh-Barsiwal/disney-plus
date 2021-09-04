import React from 'react'
import {NavLink} from 'react-router-dom'
import {Link} from 'react-router-dom';
import img from '../src/images/logo.png';
import  './index.css'

const Navbar = () => {
    return (
        <>
                  <nav className="navbar navbar-expand-lg navbar-white ">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/home"><img className="logo " src={img} alt="logo"/></NavLink>
   
      <form>
        <Link to ="/loginform" className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#exampleModal" >Login</Link>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header bg-dark">
  
        <button type="button" class="btn-close btn-light" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body bg-dark text-white d-flex flex-column align-items-center justify-content-between ">
        <div className="fs-2">Login to continue</div>
        <div className="border border-white p-2 text-white"><Link className="text-white text-decoration-none" to="https://www.facebook.com/">Have a Facebook/Email account ?</Link></div>
        <span>or</span>
        
        <div className="input-group w-75">
          <span className="input-group-text">+91</span>
          <input type ="telephone" className="form-control" placeholder="Enter your mobile number"/>
        </div>
        </div>
      </div>
  
  </div>
</div>
      </form>
    </div>
  
</nav> 


        </>
    )
}

export default Navbar
