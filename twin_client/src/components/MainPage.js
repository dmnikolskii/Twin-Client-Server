import React, { Fragment } from 'react'
import { useState } from 'react';
import './styles/Modal.css';
import './styles/index.css'
import './styles/MainPage.css';
import { useMediaQuery } from "react-responsive";

// import logo from "../images/CCI_Logo.png";
import { ReactComponent as Logo } from "../svg/logo.svg"
import { ReactComponent as TwinWatch } from "../svg/gain.svg"
import { ReactComponent as TwinSense } from "../svg/bars.svg"
import { ReactComponent as TwinSight } from "../svg/siren.svg"
import { ReactComponent as Operation } from "../svg/gears.svg"
import { ReactComponent as Unlock } from "../svg/unlock.svg"
import { ReactComponent as Lock } from "../svg/lock.svg"

import TwinWatchPage from './TwinWatchPage';
import TwinSensePage from './TwinSensePage';
import OperationPage from './OperationPage';

function MainPage({onModalClose, setBackground, isSupervisor}) {
    const [curPageID, setCurPageID] = useState(1);

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1100px) and (min-height: 500px)' }) ;
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
    
    return (
        <div className="main_page_grid_background">
            <div className="side_bar" onClick={(e)=>{if(e.target.getAttribute('class') === "side_bar") setCurPageID(0);}}>
                <div className="twin_logo">
                    <Logo fill="red" className="logo"/>
                    <p className="reg_label margin-left0 margin-right0 sidebar_resizable_font logo_text">TWIN</p>
                </div>
                <div className="separator_line"></div>

                <div className={curPageID === 1 ? 'side_button active': 'side_button'} onClick={()=>{setCurPageID(1);}}>
                    {!(isTabletOrMobile || isPortrait) && curPageID === 1 ? <Fragment><b></b><b></b></Fragment>:""}
                    <TwinWatch fill='white' className="button_ico"/>
                    <p className="reg_label margin-left0">{!(isTabletOrMobile || isPortrait) ? "TwinWatch" : ""}</p>
                </div>

                <div className={curPageID === 2 ? 'side_button active': 'side_button'} onClick={()=>{setCurPageID(2)}}>
                    {!(isTabletOrMobile || isPortrait) && curPageID === 2 ? <Fragment><b></b><b></b></Fragment>:""}
                    <TwinSense fill='white' className="button_ico"/>
                    <p className="reg_label margin-left0">{!(isTabletOrMobile || isPortrait) ? "TwinSense" : ""}</p>
                </div>

                <div className={curPageID === 3 ? 'side_button active': 'side_button'} onClick={()=>{setCurPageID(3)}}>
                    {!(isTabletOrMobile || isPortrait) && curPageID === 3 ? <Fragment><b></b><b></b></Fragment>:""}
                    <TwinSight fill='white' className="button_ico"/>
                    <p className="reg_label margin-left0">{!(isTabletOrMobile || isPortrait) ? "TwinSight" : ""}</p>
                </div>

                <div className={curPageID === 4 ? 'side_button active': 'side_button'} onClick={()=>{setCurPageID(4)}}>
                    {!(isTabletOrMobile || isPortrait) && curPageID === 4 ? <Fragment><b></b><b></b></Fragment>:""}
                    <Operation fill='white' className="button_ico"/>
                    <p className="reg_label margin-left0">{!(isTabletOrMobile || isPortrait) ? "Operation" : ""}</p>
                </div>

                <div className='side_button' onClick={()=>{setBackground(true); onModalClose(true);}}>
                    {isSupervisor ? 
                    <Unlock fill='white' className="button_ico"/> :
                    <Lock fill='white' className="button_ico"/>}
                    
                    <p className="reg_label margin-left0">{!(isTabletOrMobile || isPortrait) ? isSupervisor ? 'Admin' : 'User' : ""}</p>
                </div>
            </div>

            <div className="content_view">

            {curPageID===1 && <TwinWatchPage/>}
            {curPageID===2 && <TwinSensePage/>}
            {curPageID===4 && <OperationPage/>}

            </div>
        </div>
    )
}

export default MainPage
