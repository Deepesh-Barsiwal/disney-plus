import React from 'react'
import Card from './Card'
import img1 from '../src/images/databaseone.jpg'
import img2 from '../src/images/databasetwo.jpg'
import img3 from '../src/images/databasethree.jpg';
import img4 from '../src/images/databasefour.jpg';
import {Link} from 'react-router-dom'
import './index.css'
const SectionOne = () => {
    return (
        <>
         <div className="container-fluid">
             <div className="row">
<div className="col-12">
    <h2 className="text-white fs-3 mx-4 text-center text-md-start">Recommended for You</h2>
</div>
                 <div className="col col-12 col-xl-3">
               <Link to="/war"><Card id='1' img={img1} /> </Link> 
                 </div>

                 <div className="col col-12 col-xl-3">
                <Link to="/hanuman"> <Card  id='2' img={img2} /> </Link> 
                 </div>

                 <div className="col col-12 col-xl-3">
                <Link to="/alladin"> <Card  id='3' img={img3} /> </Link> 
                 </div>

                 <div className="col col-12 col-xl-3">
               <Link to="/descendient">  <Card  id='4' img={img4} />  </Link>
                 </div>
             </div>
         </div>
        </>
    )
}

export default SectionOne
