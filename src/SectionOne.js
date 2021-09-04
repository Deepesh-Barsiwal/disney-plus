import React from 'react'
import Card from './Card'
import disney from '../src/images/logo.png'
import national from '../src/images/National-Geographic-logo.jpg'
import pixar from '../src/images/pixar.png';
import marvel from '../src/images/marvellogo.jpg';
import './index.css'
const SectionOne = () => {
    return (
        <>
         <div className="container-fluid">
             <div className="row">

                 <div className="col col-12 col-xl-3">
                 <Card img={disney} />  
                 </div>

                 <div className="col col-12 col-xl-3">
                 <Card img={national} />  
                 </div>

                 <div className="col col-12 col-xl-3">
                 <Card img={pixar} />  
                 </div>

                 <div className="col col-12 col-xl-3">
                 <Card img={marvel} />  
                 </div>
             </div>
         </div>
        </>
    )
}

export default SectionOne
