import React from 'react'
import { Fragment } from 'react'

function DataPanel({items, className, design}) {
    const list = items.map(item => <Fragment key={item.variable}><p className="variable">{item.variable}</p> <p className={!design? "value_medium":"value_large"}>{!design? ":":""} {item.value}</p></Fragment>)
    return (
        <div className={`reg_panel ${className} reg_label data_padding`}>
            {list}
        </div>
    )
}

export default DataPanel
