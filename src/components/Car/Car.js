import React from 'react'
import { car } from '../../fackData'
import SearchItem from '../SearchItem/SearchItem'
function Car() {
    return (
        <div>
            <SearchItem data={car}/>
        </div>
    )
}

export default Car
