import React from 'react'
import { bike } from '../../fackData'
import SearchItem from '../SearchItem/SearchItem'
function Car() {
    return (
        <div>
            <SearchItem data={bike}/>
        </div>
    )
}

export default Car
