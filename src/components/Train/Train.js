import React from 'react'
import { train } from '../../fackData'
import SearchItem from '../SearchItem/SearchItem'
function Train() {
    return (
        <div>
            <SearchItem data={train}/>
        </div>
    )
}

export default Train
