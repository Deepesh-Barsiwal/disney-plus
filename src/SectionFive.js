import React from 'react'
import Card from './Card'
import img1 from '../src/images/dbimg1.jpg'
import img2 from '../src/images/dbimg2.jpg'
import img3 from '../src/images/dbimg3.jpg';
import img4 from '../src/images/dbimg4.jpg';
import './index.css'
const SectionOne = () => {
    return (
        <>
         <div className="container-fluid">
             <div className="row">
<div className="col-12">
    <h2 className="text-white fs-3 mx-4 text-center text-md-start">Trendings</h2>
</div>
                 <div className="col col-12 col-xl-3">
                 <Card img={img1} />  
                 </div>

                 <div className="col col-12 col-xl-3">
                 <Card img={img2} />  
                 </div>

                 <div className="col col-12 col-xl-3">
                 <Card img={img3} />  
                 </div>

                 <div className="col col-12 col-xl-3">
                 <Card img={img4} />  
                 </div>
             </div>
         </div>
        </>
    )
}

export default SectionOne
