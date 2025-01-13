import React, { useState } from "react";

const TrafficLight = () => {
const [redLight, setRedLight] = useState('none')
const [yellowLight, setYellowLight] = useState('none')
const [greenLight, setGreenLight] = useState('none')
const [currentColor, setCurrentColor] = useState ('red')

function red(){
        setRedLight ("0 0 50px 25px rgb(243, 243, 183)");
        setYellowLight ('none');
        setGreenLight ('none');
        currentColor('red')
};

function yellow(){
    setYellowLight ("0 0 50px 25px rgb(243, 243, 183)");
    setRedLight ('none');
    setGreenLight ('none');
    currentColor('yellow')
};

function green(){
    setGreenLight ("0 0 50px 25px rgb(243, 243, 183)");
    setRedLight ('none');
    setYellowLight ('none');
    currentColor('green')
};

function mixedColor(){
    if (currentColor == "red"){
        setCurrentColor("yellow");
        setYellowLight ("0 0 50px 25px rgb(243, 243, 183)");
        setRedLight ('none');
        setGreenLight ('none');

    } else if (currentColor == "yellow"){
        setCurrentColor("green");
        setGreenLight ("0 0 50px 25px rgb(243, 243, 183)");
        setRedLight ('none');
        setYellowLight ('none');
    }else if (currentColor== "green"){
        setCurrentColor("red");
        setRedLight ("0 0 50px 25px rgb(243, 243, 183)");
        setYellowLight ('none');
        setGreenLight ('none');
    }
}

    return (
        <>
        <div className="stick container"></div>
        <div className="container">
            <div className="red" onClick={red} style={{boxShadow: redLight}}></div>
            <div className="yellow" onClick={yellow} style={{boxShadow: yellowLight}}></div>
            <div className="green" onClick={green} style={{boxShadow: greenLight}}></div>
        </div>
        <button onClick={mixedColor} style={{width:"140px", height: "50px", borderRadius:"10px", backgroundColor: "red", cursor: "pointer", marginLeft: "500px", marginTop:"50px", fontWeight: "bold", boxShadow: "0 6px 9px rgba(0, 0, 0, 0.7)"  }}>SWITCH LIGHT</button>
        </>
    )
}

export default TrafficLight;