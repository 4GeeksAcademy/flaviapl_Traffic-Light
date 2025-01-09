import React, { useState } from "react";

const TrafficLight = () => {
const [redLight, setRedLight] = useState('none')
const [yellowLight, setYellowLight] = useState('none')
const [greenLight, setGreenLight] = useState('none')

function red(){
        setRedLight ("0 0 50px 25px rgb(243, 243, 183)");
        setYellowLight ('none');
        setGreenLight ('none');
};

function yellow(){
    setYellowLight ("0 0 50px 25px rgb(243, 243, 183)");
    setRedLight ('none');
    setGreenLight ('none');
};

function green(){
    setGreenLight ("0 0 50px 25px rgb(243, 243, 183)");
    setRedLight ('none');
    setYellowLight ('none');
};


    return (
        <>

        <div className="stick container"></div>
        <div className="container">
            <div className="red" onClick={red} style={{boxShadow: redLight}}></div>
            <div className="yellow" onClick={yellow} style={{boxShadow: yellowLight}}></div>
            <div className="green" onClick={green} style={{boxShadow: greenLight}}></div>
        </div>

        </>

    )
}

export default TrafficLight;