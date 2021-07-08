import React from 'react'
import { Fragment, useState } from 'react'

import LargeButton from "./LargeButton";
import DataPanel from "./DataPanel";
import OtherModal from "./OtherModal";

function ProductionScreen() {
    const [openOtherModal, setOpenOtherModal] = useState(false);

    return (
        <Fragment>
            <div className={openOtherModal ? 'background_layer blur': 'background_layer'}>

            <div className="reg_panel panel11 reg_label label_bold">Kyrgyzstan Bishkek [Line-02]</div>
            <div className="reg_panel reg_label panel21 red">STOPPED</div>

            <DataPanel className="panel12" items={[{variable:"Number", value:7195},
                                                {variable:"Planned amount", value:"312000"},
                                                {variable:"Rest amount", value:"68943"}]} design={1}/>

            <DataPanel className="panel13" items={[{variable:"Batch #", value:"101302"},
                                                {variable:"Product type", value:"COCA-COLA PET 1.0L"},
                                                {variable:"Number", value:"639816"}]} design={0}/>

            <DataPanel className="panel14" items={[{variable:"Employee name", value:"Dmitrii Gnatusha"},
                                                {variable:"Instant stoppage", value:"10 min."},
                                                {variable:"Shift prod. amount", value:"29,629,00"},
                                                {variable:"Stoppage sum", value:"25 min."},
                                                {variable:"OEE", value:"72.0"}]} design={0}/>

            <DataPanel className="panel22" items={[{variable:"ADT", value:"243,057"},
                                                {variable:"PHC", value:"10,127"},
                                                {variable:"PAL", value:"141"}]} design={1}/>

            <DataPanel className="panel23" items={[{variable:"Plan date", value:"06.16.2021 00:00"},
                                                {variable:"Plan commision date", value:"06.16.2021 00:02"},
                                                {variable:"Elapsed time", value:"17 h. 45 min."}]} design={0}/>

            <DataPanel className="panel24" items={[{variable:"Prod. version", value:"V002"},
                                                {variable:"Instant speed", value:"18311"},
                                                {variable:"Avg.speed", value:"16375"},
                                                {variable:"Production plan", value:"18971"}]} design={0}/>

            <div className="reg_panel button-panel">
                <LargeButton onClick={()=>{}} caption="FINISH PRODUCTION PLAN"/>
                <LargeButton onClick={()=>{}} caption="DEFINE STOPPAGE"/>
                <LargeButton onClick={()=>{}} caption="CHANGE STOPPAGE"/>
                <LargeButton onClick={()=>{}} caption="STAFF OPERATION"/>
                <LargeButton onClick={()=>{}} caption="EFFICIENCY ANALYSIS"/>
                <LargeButton onClick={()=>{setOpenOtherModal(true)}} caption="OTHER OPERATIONS"/>
            </div>
            <div className="footer"></div>  
            </div>    

            {openOtherModal && <OtherModal onModalClose={setOpenOtherModal}/>} 

        </Fragment>
    )
}
 
export default ProductionScreen
