import React from 'react'
import LinePicker from './LinePicker'
import { Fragment } from 'react';

import CarouselButton from './CarouselButton'
import LinkButton from './LinkButton';

import 'react-multi-carousel/lib/styles.css';

import { ReactComponent as TableLogo } from "../svg/table.svg"
import { ReactComponent as PresentLogo } from "../svg/present.svg"
import { ReactComponent as PieLogo } from "../svg/present.svg"

function TwinSensePage() {
    return (
        <Fragment>
            <LinePicker/>
            <div className="container2">
                <CarouselButton caption="CIP"/>
                <CarouselButton caption="Stoppage"/>
            </div>

            <div className="separator_line1"></div>

            <div className="link_container">
                <LinkButton caption="CIP Records & Cycle Analusis" Icon={TableLogo}/>
                <LinkButton caption="Duration Trend" Icon={PresentLogo}/>
                <LinkButton caption="CIP & Duration Distribution" Icon={PieLogo}/>
                <LinkButton caption="Outliers" Icon={PresentLogo}/>
            </div>
        </Fragment>
    )
}

export default TwinSensePage
