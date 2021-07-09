import React from 'react'
import { Fragment } from 'react'
import "./styles/LinkButton.css"

import { ReactComponent as GraphLogo } from "../svg/pie.svg"

function LinkButton({caption, icon, link}) {
    return (
        <Fragment>
            
            <div className="link_button reg_label" onClick = {() => { }}>
                <GraphLogo fill="white" className="button_ico"/>
                {/*<Icon fill="white" className="button_ico"/>*/}
                {caption}
            </div>    
        </Fragment>
    )
}

export default LinkButton
