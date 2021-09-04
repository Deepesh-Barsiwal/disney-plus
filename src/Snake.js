import React from 'react'
import './index'
import img from '../src/images/dbsfour.jpeg'
const RightStuff = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row falcon-background"  style = {{backgroundImage:`url(${img})`,minHeight:`88.5vh`,backgroundSize:`cover`,opacity:`1`}}>
                    <div className="col col-12 d-flex flex-column justify-content-start align-items-start">
<div className=" d-flex align-items-center my-2">
    <button className="btn btn-light p-2 px-4 mx-2"><i class="fas fa-play mx-1"></i>PLAY</button>
    <button className="btn btn-outline-light p-2 px-4 mx-2"><i class="fas fa-play mx-1"></i>Trailer</button>
    <i class="fas fa-plus-circle text-white fs-1 mx-3"></i>
    <i class="fas fa-users text-white fs-1"></i>
</div>

<p className="text-white fs-5 my-2 d-none d-md-block">2021 • 1 Season • Science Fiction, Action-Adventure, Buddy</p>
<div className="w-50 d-none d-md-block"><p className="text-white fs-5 ">Marvel Studios’ “The Mandalorean” stars Anthony Mackie as Sam Wilson aka The Falcon, and Sebastian Stan as Bucky Barnes aka The Winter Soldier. The pair, who came together in the final moments of “Avengers: Endgame,” team up on a global adventure that tests their abilities—and their patience.</p></div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default RightStuff
