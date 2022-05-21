import { Briefcase, Home, User, Settings, LogOut, ChevronRight } from "react-feather"
import { useState } from 'react'

export const SideBar = ({ current, setCurrent }) => {

    return (
        <nav>
            <h1>PresManager</h1>
            <ul>
                <li className={(current==0)?'active':''} onClick={() => setCurrent(0)}><Briefcase/> Dashboard</li>
                <li className={(current==1)?'active':''} onClick={() => setCurrent(1)}><Home/> Properties</li>
                <li className={(current==2)?'active':''} onClick={() => setCurrent(2)}><User/> Patients</li>
            </ul>
            <div className="user-section">
                <div className="user-details">
                    <div className="user-icon"></div>
                    <h1>Annette Black</h1>
                    <p>anette.bl@gmail.com</p>
                </div>
                <div className="user-options">
                    <button title="Settings"><Settings/></button>
                    <button title="Log Out"><LogOut/></button>
                </div>
            </div>
        </nav>
    )
}