import React from 'react'
import Card from './Card'
import img1 from '../src/images/dbone.jpg'
import img2 from '../src/images/dbtwo.jpg'
import img3 from '../src/images/dbthree.jpg';
import img4 from '../src/images/dbfour.jpg';
import {Link} from 'react-router-dom'
import './index.css'
const SectionOne = () => {
    return (
        <>
         <div className="container-fluid">
             <div className="row">
<div className="col-12">
    <h2 className="text-white fs-3 mx-4 text-center text-md-start">New To Disney+</h2>
</div>
                 <div className="col col-12 col-xl-3">
               <Link to ="/falcon"><Card img={img1} /> </Link> 
                 </div>

                 <div className="col col-12 col-xl-3">
                <Link to="/manada"> <Card img={img2} /></Link>
                 </div>

                 <div className="col col-12 col-xl-3">
             <Link to="/women"><Card img={img3} /></Link>  
                 </div>

                 <div className="col col-12 col-xl-3">
                <Link to="/falcon"> <Card img={img4} /> </Link> 
                 </div>
             </div>
         </div>
        </>
    )
}

export default SectionOne
