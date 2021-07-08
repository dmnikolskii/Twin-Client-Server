import React from 'react'
import ModalButton from "./ModalButton";

import './styles/Modal.css';
import './styles/ModalButton.css';

function Modal({onModalClose}) {
    return (
        <div>
            <div onClick={(e)=>{if(e.target.getAttribute('class') === "modalBackground") onModalClose(false)}} className="modalBackground">
                <div className="modalContainer">
                <div className="reg_label label_bold label32 padding32">OTHER</div>
                    <div className="modalButtonContainer">
                        <ModalButton caption="SHIFT DEFINITION"/>
                        <ModalButton caption="SHIFT ACTIVITY"/>
                        <ModalButton caption="EFFICIENCY ANALYSIS"/>
                        <ModalButton caption="PLAN MANAGER"/>
                        <ModalButton caption="USER MANAGER"/>
                        <ModalButton onClick={()=>{window.location.href="https://devtestgrafana.cci.com.tr/d/5j9kAryGz/corlu-prd-06-vibration-data?orgId=1&from=1622613600000&to=1622653199000"}} caption="CIP ANALYSIS"/>
                    </div>
                </div>            
            </div>
        </div>
    )
}

export default Modal
