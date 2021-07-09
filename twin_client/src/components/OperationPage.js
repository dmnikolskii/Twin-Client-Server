import React from 'react'
import ProductionScreen from './ProductionScreen'
import { Fragment, useState } from 'react'
import LinePicker from './LinePicker'
import CarouselButton from './CarouselButton'

function OperationPage() {

    const [operationDataset, setOperationDataset] = useState([]);

        console.log(operationDataset);
        
    return (
        <Fragment>
            <LinePicker pageID={4} setDataset={setOperationDataset}/>
            <div className="container2">
                <CarouselButton caption="Status"/>
                <CarouselButton caption="Finish Plan"/>
                <CarouselButton caption="Define Stop."/>
            </div>

            <div className="separator_line1"></div>
            <ProductionScreen/>
        </Fragment>
    )
}

export default OperationPage
