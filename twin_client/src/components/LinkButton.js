import React from 'react'
import { Fragment, useRef } from 'react'
import "./styles/LinkButton.css"

import { ReactComponent as PieLogo } from "../svg/pie.svg"
import { ReactComponent as GraphLogo } from "../svg/graph.svg"
import { ReactComponent as TableLogo } from "../svg/table.svg"
import { ReactComponent as PresentLogo } from "../svg/present.svg"
import { ReactComponent as GaugeLogo } from "../svg/gauge.svg"

function LinkButton({caption, icon, link}) {

    return (
        <Fragment>            
            <div className="link_button reg_label" onClick = {() => { }}>

                {icon === "graph" &&  <GraphLogo fill="white" className="button_ico"/>}
                {icon === "pie" &&  <PieLogo fill="white" className="button_ico"/>}
                {icon === "table" &&  <TableLogo fill="white" className="button_ico"/>}
                {icon === "present" &&  <PresentLogo fill="white" className="button_ico"/>}
                {icon === "gauge" &&  <GaugeLogo fill="white" className="button_ico"/>}

                {/*<Icon fill="white" className="button_ico"/>*/}
                {caption}
            </div>    
        </Fragment>
    )
}

export default LinkButton
