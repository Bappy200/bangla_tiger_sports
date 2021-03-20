import React from 'react'
import { bus } from '../../fackData'
import SearchItem from '../SearchItem/SearchItem'

function Bus() {
    return (
        <div>
            <SearchItem data={bus}/>
        </div>
    )
}

export default Bus
