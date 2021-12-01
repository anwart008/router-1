import React, {useState} from 'react'
import '../App.css'
import { SidebarItems } from '../components/SidebarItem'
import {  Link, useLocation } from "react-router-dom";



const Sidebar = () => {

const [current, setCurrent] = useState("");
const location=useLocation();

    return (
        
        
        <div className="sidebar">
            {SidebarItems.map((item, key) => {
                // console.log(window.location.pathname);
                // console.log(item.link);
                

                return (

                    <Link  to = {item.link}>
                    <div className="float-container" onClick={()=> {setCurrent(location)
                    console.log(location, item.link)
                    }} id={current===item.link ? "active" :""} >
                        <div className="float-child">{item.icon}</div>
                        <div className="float-child">{item.text}</div>
                    </div>
                    </Link>
                )
            })}
        </div>
        
    )
}

export default Sidebar

//onClick={()=>window.location.pathname=item.link}