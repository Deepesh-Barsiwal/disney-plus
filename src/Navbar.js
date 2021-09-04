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
        <Link to ="/falcon" className="btn btn-outline-light" >Login</Link>
      </form>
    </div>
  
</nav> 


        </>
    )
}

export default Navbar
