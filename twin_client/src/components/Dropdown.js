import React, { Component } from 'react'
import ComboBox from 'react-responsive-combo-box'

export default class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = { items:this.props.items };
    }


    render() {   

        return (
                <ComboBox
                    options={this.props.items}
                    placeholder={this.props.placeholder}
                    defaultIndex={0}
                    optionsListMaxHeight={200}
                    style={{
                        width: "0",
                        backgroundColor: "white",
                        flex: "1 1 0",
                        margin: "0px 5vw 0px 5vw",
                        maxWidth: "200px",
                        maxHeight: "30px" 
                        }}
                    focusColor="rgba(196, 196, 196, 0.24)"
                    enableAutocomplete
                />            
        )
    }
}
