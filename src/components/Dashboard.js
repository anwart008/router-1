import React from 'react'
import { MdSearch, MdSpaceDashboard, MdOutlineContentCopy, MdNotifications} from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

export const Dashboard = () => {
    return (
        <div className="main-div">
            <nav className="navbar">
                <div className="navcontainer">
                    <h1 id="navlogo">Dashboard</h1>
                </div>
                <div className="navcontainer">
                    <form className="d-flex">
                        <input className="search-bar" type="text" placeholder="Search" aria-label="Search" />
                        <button className="round-search" type="submit"><MdSearch/></button>
                    </form>
                </div>
                <div className="navcontainer" >
                    <div className="icon">
                        <MdSpaceDashboard/>
                    </div>
                    <div className="icon">
                        <MdNotifications/>
                    </div>
                    <div className="icon">
                        <FaUserAlt/>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="smallcontainer">
                    <div className="imgbox">
                        <div className="smimgbox"><MdOutlineContentCopy/></div>
                        <div className="righttext "><p>Used Space</p><h4>49/50 GB</h4></div>
                    </div>
                    <div className="lefttext"><p><hr/>Get more space</p></div>
                </div>
                <div className="smallcontainer">
                    <div className="imgbox">
                        <div className="smimgbox"><MdOutlineContentCopy/></div>
                        <div className="righttext "><p>Revenue</p><h4>$34,245</h4></div>
                    </div>
                    <div className="lefttext"><p><hr/>Last 24 hrs</p></div>
                </div>
                <div className="smallcontainer">
                    <div className="imgbox">
                        <div className="smimgbox"><MdOutlineContentCopy/></div>
                        <div className="righttext "><p>Fixed Issues</p><h4>75</h4></div>
                    </div>
                    <div className="lefttext"><p><hr/>Tracked from Github</p></div>
                </div>
                <div className="smallcontainer">
                    <div className="imgbox">
                        <div className="smimgbox"><MdOutlineContentCopy/></div>
                        <div className="righttext "><p>Followers</p><h4>+245</h4></div>
                    </div>
                    <div className="lefttext"><p><hr/>Just Updated</p></div>
                </div>
            </div>
            <div className="container">
                <div className="bigcontainer">
                    <div className="lgimgbox"><MdOutlineContentCopy/></div>
                    <div className="lefttext"><h4>Daily Sales</h4><p>55% increase in todays sales<hr/>Updated 4 minutes ago</p></div>
                </div>
                <div className="bigcontainer">
                    <div className="lgimgbox"><MdOutlineContentCopy/></div>
                    <div className="lefttext"><h4>Email Subscription</h4><p>Last Campaign Performance<hr/>campaign sent 2 days ago</p></div>
                </div>
                <div className="bigcontainer">
                    <div className="lgimgbox"><MdOutlineContentCopy/></div>
                    <div className="lefttext"><h4>Completed Tasks</h4><p>Last Campaign Performance<hr/>campaign sent 2 days ago</p></div>
                </div>
            </div>
        </div>
    )
}
