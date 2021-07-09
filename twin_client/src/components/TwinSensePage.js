import React from 'react'
import LinePicker from './LinePicker'
import { Fragment, useState } from 'react';

import CarouselButton from './CarouselButton'
import LinkButton from './LinkButton';

import 'react-multi-carousel/lib/styles.css';

function TwinSensePage() {

    const [senseDataset, setSenseDataset] = useState([]);

    return (
        <Fragment>
            <LinePicker pageID={2} setDataset={setSenseDataset}/>
            <div className="container2">
                <CarouselButton caption="CIP"/>
                <CarouselButton caption="Stoppage"/>
            </div>

            <div className="separator_line1"></div>

            <div className="link_container">
                {senseDataset.map((data, i) => {
                        return(<LinkButton caption={data.caption} icon={data.icon} link={data.link}/>);
                    })}

                {/*<LinkButton caption="CIP Records & Cycle Analusis" Icon={TableLogo}/>
                <LinkButton caption="Duration Trend" Icon={PresentLogo}/>
                <LinkButton caption="CIP & Duration Distribution" Icon={PieLogo}/>
    <LinkButton caption="Outliers" Icon={PresentLogo}/>*/}
            </div>
        </Fragment>
    )
}

export default TwinSensePage
