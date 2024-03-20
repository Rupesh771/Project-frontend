import React from 'react';
import Navbar from './Navbar';

export default function Aboutus() {
    return (
        
        <div>
            <Navbar/>
            <div className="mainaboutus">
            <div className="container about mt-5">
                <div className="row">
                    <div className="col-md-6">
                       
                    <img src="./img/naka.png" alt="about Page" style={{height:300}} />
                     
                    </div>
                    <div className="col-md-6">
                        <h5>Uniyeko shop is a leading handmade Handicraft shop in Nepal</h5>
                        <p>Nepal Craft Shop is a leading handmade Handicraft company in Nepal. We sell our own handmade handicraft products using local resources by local Nepalese people. We do have our inventory of our own manufactured by our skilled manpower.

                        We are one of the leading manufacturer, exporter and wholeseller of different types of Nepalese handmade handicraft products like handmadeclothing, handmade jewelleries, handmade felt goods, handmade thanks, handmade handicraftpaper, Handmade handicraft Statue, Handmade singing bowls, Handmade painting, Handmadeglass pipe, handmade wooden products, handmade prayer wheels, Handmade pashmina.

                        We do not compromise with the quality and offer even single good in wholesaleprice*. Nepal craft shop believes that the internet is the simplest way ofshopping nowadays which provides you the product you are searching for and inthe other hand saves your valuable time as well. Therefore, we help to makeshopping easy and accessible to everyone. This company is providing theopportunities of employment to many people and helps raise their livingstandard.</p>
                    </div>
                </div>
            </div><br/>
            <hr/>

            <div className="container missionabout">
                <div className="row">
                    <div className="col-md-6">
                    <h5>Mission</h5>
                    <p>Uniyeko Shop is established for earning goodwill for itself, which only 
                    can bedone with quality of products and satisfaction of our valued customers. 
                    We are verysure that once our valued customers/clients provide us opportunities for 
                    supplyingthe products or, they will realize that we are really worth it and we never letyour
                     hopes go down. We are glad to be with our investors, customers, employees,community and as a 
                     whole world being connected in one click</p>
                    </div>

                    <div className="col-md-6">
                        <h5>Vission</h5>
                        <p>To utilize local resources of Nepal in realityand let the world see for what really they are meant. Uniyeko Shop is committed to raise thestandard of living of rural and urban Nepalese by providing them with anopportunity to earn an income.  In this 21st century, work as abridge to access between products and potential customers and save their time.
                             Allthe products seen in the website are ready to dispatch materials so we justneed the time for shipping only.</p>
                    </div>

                </div>
                
            </div>
            
        </div>
        </div>
    )
}
