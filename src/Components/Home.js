import React from 'react';
import Commonpages from './Commonpages';
import cool from '../Components/Images/cool.jpg';
import Navbar from './Navbar';


const Home = ()=> {
    return (
        <>
        <Navbar/>
        <Commonpages 
        name='Grow your business with' 
        imgsrc={cool} visit="/signup"
        btnname="Get Started"
       />
            
        </>
    )
}

export default Home

