import React from 'react'
import Card from './Card'
import img1 from '../src/images/dbsone.jpg'
import img2 from '../src/images/dbstwo.jpeg'
import img3 from '../src/images/dbsthree.png';
import img4 from '../src/images/dbsfour.jpeg';
import {Link} from 'react-router-dom'
import './index.css'
const SectionOne = () => {
    return (
        <>
         <div className="container-fluid">
             <div className="row">
<div className="col-12">
    <h2 className="text-white fs-3 mx-4 text-center text-md-start">Originals</h2>
</div>
                 <div className="col col-12 col-xl-3">
                <Link to="/rightStuff"> <Card img={img1} />  </Link>
                 </div>

                 <div className="col col-12 col-xl-3">
                 <Link to="/bad"> <Card img={img2} />  </Link> 
                 </div>

                 <div className="col col-12 col-xl-3">
                 <Link to="/manada"> <Card img={img3} />  </Link>  
                 </div>

                 <div className="col col-12 col-xl-3">
                 <Link to="/snake"> <Card img={img4} />  </Link>
                 </div>
             </div>
         </div>
        </>
    )
}

export default SectionOne
