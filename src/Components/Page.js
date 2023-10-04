import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Home from './Home'
import Footer from './Footer'

function Page() {
   const {page} =  useParams()
  
   if (page == 1){
    return(
        <Home />
    )
   }else{
    return (
        <div>
            {/* <Link to={'/*'} /> */}
            <p>page number {page}</p>
            <Footer />
        </div>
      )
   }
}

export default Page