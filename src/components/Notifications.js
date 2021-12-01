import React from 'react'
import { MdSearch, MdSpaceDashboard, MdNotifications} from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

export const Notifications = () => {
    return (
        <div className="main-div">
            <nav className="navbar" id="Userdiv">
                <div className="navcontainer" >
                    <h1 id="navlogo">Notifications</h1>
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

            <form className="formcontainer">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}
