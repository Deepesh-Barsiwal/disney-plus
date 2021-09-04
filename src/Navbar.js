import React from 'react'
import {NavLink} from 'react-router-dom'
import {Link} from 'react-router-dom';
import img from '../src/images/logo.png';
import  './index.css'

const Navbar = () => {
    return (
        <>
                  <nav className="navbar navbar-expand-sm navbar-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/home"><img className="logo " src={img} alt="logo"/></NavLink>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            TV
          </a>
          <ul className="dropdown-menu bg-light" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Hotstar Special</a></li>
            <li><a className="dropdown-item" href="#">Quix</a></li>
            
            <li><a className="dropdown-item" href="#">Star Plus</a></li>
            <li><a className="dropdown-item" href="#">Star Vijay</a></li>
            <li><a className="dropdown-item" href="#">Star Bharat</a></li>
            <li><a className="dropdown-item" href="#">Asianet</a></li>
            <li><a className="dropdown-item" href="#">Star Maa</a></li>
            <li><a className="dropdown-item" href="#">more..</a></li>
            <li><a className="dropdown-item" href="#">Star Jasha</a></li>
          </ul>
        </li>

      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Movies
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Hindi</a></li>
            <li><a className="dropdown-item" href="#">Bengali</a></li>
            <li><a className="dropdown-item" href="#">Telugu</a></li>
            <li><a className="dropdown-item" href="#">Malyalam</a></li>
            <li><a className="dropdown-item" href="#">Tamil</a></li>
            <li><a className="dropdown-item" href="#">Marathi</a></li>
            <li><a className="dropdown-item" href="#">English</a></li>
          </ul>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sports
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Cricket</a></li>
            <li><a className="dropdown-item" href="#">Football</a></li>
            <li><a className="dropdown-item" href="#">Tennis</a></li>
            <li><a className="dropdown-item" href="#">Kabbadi</a></li>
            <li><a className="dropdown-item" href="#">Formula 1</a></li>
            <li><a className="dropdown-item" href="#">eSports</a></li>
            <li><a className="dropdown-item" href="#">Formuls E</a></li>
            <li><a className="dropdown-item" href="#">Basketball</a></li>
            <li><a className="dropdown-item" href="#">Badminton</a></li>
            <li><a className="dropdown-item" href="#">Hockey</a></li>
            <li><a className="dropdown-item" href="#">Athletics</a></li>
            <li><a className="dropdown-item" href="#">Golf</a></li>
            <li><a className="dropdown-item" href="#">Wrestling</a></li>
            <li><a className="dropdown-item" href="#">Table Tennis</a></li>
            <li><a className="dropdown-item" href="#">Khelo India</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#" tabindex="-1" aria-disabled="true">Disney</a>
        </li>
      </ul>

      <form>
        <Link to ="/loginform" className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#exampleModal" >Login</Link>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header bg-dark">
  
        <button type="button" className="btn-close btn-light" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body bg-dark text-white d-flex flex-column align-items-center justify-content-between ">
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
  </div>
</nav> 


        </>
    )
}

export default Navbar
