import React from 'react'
import LinePicker from './LinePicker'
import { Fragment, useState } from 'react';

import CarouselButton from './CarouselButton'
import LinkButton from './LinkButton'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
        
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
    };
    
function TwinWatchPage() {

    const [watchDataset, setWatchDataset] = useState([]);

    return (
        <Fragment>
            <LinePicker pageID={1} setDataset={setWatchDataset}/>
            <div className="container1">
                <Carousel responsive={responsive} containerClass="car_container" arrows={false} centerMode={true} additionalTransfrom={2}>
                    <div>
                        <CarouselButton caption="Syrup Room"/>
                    </div>
                    <div>
                        <CarouselButton caption="Blower"/>
                    </div>
                    <div>
                        <CarouselButton caption="Mixer"/>
                    </div>
                    <div>
                        <CarouselButton caption="Filler"/>
                    </div>
                    <div>
                        <CarouselButton caption="Labeller"/>
                    </div>
                    <div>
                        <CarouselButton caption="Packer"/>
                    </div>
                    <div>
                        <CarouselButton caption="Palletizer"/>
                    </div>
                    <div>
                        <CarouselButton caption="Stretcher"/>
                    </div>
                </Carousel>           
            </div>

            <div className="separator_line1"></div>

            <div className="link_container">
                {watchDataset.map((data, i) => {
                    return(<LinkButton caption={data.caption} icon={data.icon} link={data.link}/>);
                })}
                
                {/*<LinkButton caption="Line Performance Andon Dashboard" Icon={GaugeLogo}/>
                <LinkButton caption="Process Parameters Analysis Dashboard" Icon={GraphLogo}/>
                <LinkButton caption="Vibration Analysis Dashboard" Icon={GraphLogo}/>
                <LinkButton caption="Fault Analisys Dashboard" Icon={GraphLogo}/>*/}
            </div>

        </Fragment>
    )
}

export default TwinWatchPage
