import React from 'react'
import { Fragment } from 'react'
import "./styles/LinkButton.css"

// import { ReactComponent as GraphLogo } from "../svg/graph.svg"

function LinkButton({caption, Icon}) {
    return (
        <Fragment>
            <div className="link_button reg_label">
                <Icon fill="white" className="button_ico"/>
                {caption}
            </div>    
        </Fragment>
    )
}

export default LinkButton
