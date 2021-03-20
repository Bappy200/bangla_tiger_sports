import React from 'react'
import { car } from '../../fackData'
import SearchItem from '../SearchItem/SearchItem'

function Bike() {
    return (
        <div>
           <SearchItem data={car}/>
        </div>
    )
}

export default Bike
