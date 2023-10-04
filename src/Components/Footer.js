import React, { useState } from 'react'
import Pagination from './Pagination'

function Footer() {


    return (
        <div className='my-5' style={{background:'rgba(0,0,0,0.2)'}}>
            <Pagination />
        </div>
    )
}

export default Footer