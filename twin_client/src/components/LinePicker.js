import React, { Fragment } from 'react'
import { useState, useEffect } from 'react'
import './styles/LinePicker.css'

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import Axios from 'axios'

const countries = [
    "Azerbaijan",
    "Jordan",
    "Kazakhstan",
    "Kyrgyzstan",
    "North Iraq",
    "Pakistan",
    "South Iraq",
    "Tajikistan",
    "Turkey",
    "Turkmenistan",
    "Uzbekistan"
  ];

  const plants={ 
    "Azerbaijan":["Baku"], 
    "Jordan":["Madaba"], 
    "Kazakhstan":["Burunday", "Astana"],
    "Kyrgyzstan":["Bishkek"],
    "North Iraq":["Erbil"],
    "Pakistan":["Lahore", "Gujranwala", "Faisalabad", "Multan", "Karachi", "RYK"],
    "South Iraq":["Karbala", "Hilla"],
    "Tajikistan":["Dushanbe"],
    "Turkey":["Chorlu", "Bursa", "Mersin", "Elazig", "Ankara", "Izmir", "Koycegiz", "Isparta", "Sapanca", "Hazar"],
    "Turkmenistan":["Ashkabat"],
    "Uzbekistan":["plant1", "plant2", "plant3"]
};

  const lines={
    "Baku":["Line-01", "Line-02", "Line-03", "Line-04", "Line-05", "Line-06"], 
    "Madaba":["Line-01", "Line-02", "Line-03", "Line-04"], 
    "Burunday":["Line-01", "Line-02", "Line-03", "Line-04", "Line-05", "Line-06", "Line-07", "Line-08", "Line-09", "Line-10"], 
    "Astana":["Line-01", "Line-02", "Line-03"], 
    "Bishkek":["Line-01", "Line-02"], 
    "Erbil":["Line-01", "Line-02", "Line-03"], 
    "Lahore":["Line-01", "Line-02", "Line-03", "Line-04", "Line-05", "Line-06", "Line-07"], 
    "Gujranwala":["Line-01", "Line-02", "Line-03", "Line-04", "Line-05"], 
    "Faisalabad":["Line-01", "Line-02", "Line-03"], 
    "Multan":["Line-01", "Line-02", "Line-03", "Line-04"], 
    "Karachi":["Line-01", "Line-02"], 
    "RYK":["Line-01", "Line-02", "Line-03"], 
    "Karbala":["Line-01", "Line-02", "Line-03", "Line-04"], 
    "Hilla":["Line-01", "Line-02", "Line-03", "Line-04", "Line-05", "Line-06"], 
    "Dushanbe":["Line-01"], 
    "Chorlu":["Line-01", "Line-02", "Line-03", "Line-04", "Line-05", "Line-06", "Line-07", "Line-08"], 
    "Bursa":["Line-01", "Line-02", "Line-03", "Line-04", "Line-05", "Line-06", "Line-07", "Line-08", "Line-09", "Line-10", "Line-11", "Line-12", "Line-13", "Line-14"], 
    "Mersin":["Line-01", "Line-02", "Line-03", "Line-04", "Line-05", "Line-06", "Line-07", "Line-08", "Line-09"], 
    "Elazig":["Line-01", "Line-02", "Line-03"], 
    "Ankara":["Line-01", "Line-02", "Line-03", "Line-04", "Line-05", "Line-06", "Line-07"], 
    "Izmir":["Line-01", "Line-02", "Line-03", "Line-04", "Line-05", "Line-06"], 
    "Koycegiz":["Line-01", "Line-02", "Line-03", "Line-04"], 
    "Isparta":["Line-01", "Line-02"], 
    "Sapanca":["Line-01", "Line-02", "Line-03", "Line-04", "Line-05"], 
    "Ashkabat":["Line-01, Line-02"],
    "plant1":["Line-01"],
    "plant2":["Line-01"],
    "plant3":["Line-01"]
};

function LinePicker({pageID, setDataset}) {

    const [country, setCountry] = useState(countries[0]);
    const [cities, setCities] = useState(plants[countries[0]]);
    const [selectedCity, setSelectedCity] = useState(plants[countries[0]]);
    const [selectedLine, setSelectedLine] = useState(lines[plants[countries[0]][0]][0]);

    const submitLinkReq = () => {      
      Axios.post('http://localhost:3001/api/fetch_links',{
        country: country,
        city: selectedCity,
        line: selectedLine,
        pageid: pageID
      })
      .then((response) => {
        // console.log(response.data);
        setDataset(response.data);
      });
    }
  
    useEffect(() => {
        setCities(plants[country]);
        setSelectedCity(plants[country][0])
        setSelectedLine(lines[plants[countries[0]]][0])
    }, [country]);

    useEffect(() => { 
        setSelectedLine(lines[plants[countries[0]]][0])
    }, [selectedCity]);

    useEffect(() => {
        console.log("Country: " + country);
        console.log("Cities: " + cities);
        console.log("Lines: " + lines[plants[country][0]]);
        console.log("Selected city: " + selectedCity);
        console.log("Selected line:" + selectedLine);
        console.log("=====================");
        submitLinkReq();
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [country, selectedCity, selectedLine]);
    
    return (
        <Fragment>
            <div className="container">
                <Dropdown className='dropdown' controlClassName="dropdown-cont" options={countries} onChange={(e) => {setCountry(e.value); setCities(plants[e.value])}} value={country} placeholder="country" />
                <Dropdown className='dropdown' controlClassName="dropdown-cont" options={cities} onChange={(e) => {setSelectedCity(e.value)}} value={selectedCity} placeholder="city" />
                <Dropdown className='dropdown' controlClassName="dropdown-cont" options={lines[selectedCity]} onChange={(e) => {setSelectedLine(e.value)}} value={selectedLine} placeholder="line" /> 

            </div>
        </Fragment>
    )
}

export default LinePicker
