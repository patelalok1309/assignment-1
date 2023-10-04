import React, { useState } from 'react'
import { useStateValue } from '../context/stateProvider'
import reducer , {actionType} from '../context/reducer'

function Header() {
    const [searchCar, setSearchCar] = useState('')
    const [{searchTerm} ,dispatch] = useStateValue()

    const handleSearch = () => {
        dispatch({
            type : actionType.SET_SEARCHTERM,
            searchTerm : searchCar,
        })
    }
    
    return (
        <div className='p-3 rounded-md border border-rounded mb-2'>
            <input type="text" onChange={(e)=> setSearchCar(e.target.value)} />
            <button type="submit"><span className='search-icon' onClick={handleSearch}> search</span></button>
        </div>
    )
}

export default Header