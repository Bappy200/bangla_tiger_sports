import React from 'react'
import { bike } from '../../fackData'
import SearchItem from '../SearchItem/SearchItem'

function Bike() {
    return (
        <div>
           <SearchItem data={bike}/>
        </div>
    )
}

export default Bike
