import React from 'react'
import Card from './Card'
import img1 from '../src/images/dbimg1.jpg'
import img2 from '../src/images/dbimg2.jpg'
import img3 from '../src/images/dbimg3.jpg';
import img4 from '../src/images/dbimg4.jpg';
import './index.css'
import { Link } from 'react-router-dom';
const SectionOne = () => {
    return (
        <>
         <div className="container-fluid">
             <div className="row">
<div className="col-12">
    <h2 className="text-white fs-3 mx-4 text-center text-md-start">Trendings</h2>
</div>
                 <div className="col col-12 col-xl-3">
                <Link to="/luca"> <Card img={img1} />  </Link>
                 </div>

                 <div className="col col-12 col-xl-3">
                 <Link to="loki"> <Card img={img2} />  </Link>
                 </div>

                 <div className="col col-12 col-xl-3">
                 <Link to="/dinner"> <Card img={img3} />  </Link>
                 </div>

                 <div className="col col-12 col-xl-3">
                 <Link to="/president"> <Card img={img4} />  </Link>
             </div>
             </div>
         </div>
        </>
    )
}

export default SectionOne
