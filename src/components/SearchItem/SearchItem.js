import React, { useState } from 'react'
import GoogleMap from '../GoogleMap/GoogleMap';
import './SearchItem.css'

function SearchItem(props) {
    const datas = props.data;
    console.log(datas)
    const [display,setDisplay] = useState(false);
    const listStyle={listStyle:'none',padding:'10px 15px',background:'#333',color:'#ffff',marginTop:'10px',borderRadius:'10px'}

    return (
       <div className='main-section'>
            <div className='search-section'>
            <span>Pick From</span>
            <input className='form-control' placeholder='Pick From' required/>
            <br/>
            <span>Pick To</span>
            <input className='form-control' placeholder='Pick To' required/>
            <button className='btn btn-success' onClick={()=> setDisplay(true)} >Search</button>
            {
                display && <ul style={{margin:'0px',padding:'0px'}}>
                    {
                        datas.map(data => <li style={listStyle}>{data.name}    {data.count}   ${data.cost} </li>)
                    }
                </ul>

            }
        </div>
        <div className='google-map-section'>
            <GoogleMap></GoogleMap>
        </div>
       </div>
    )
}

export default SearchItem
