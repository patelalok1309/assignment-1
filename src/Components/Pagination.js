import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ totalPages }) => {
  
    const [pagebtn1, setPageBtn1] = useState(1)
    const [pagebtn2, setPageBtn2] = useState(2)
    const [pagebtn3, setPageBtn3] = useState(3)

    const handlePrevious = () => {
        if (pagebtn1!==1){
            setPageBtn1(pagebtn1 - 1)
            setPageBtn2(pagebtn2 - 1)
            setPageBtn3(pagebtn3 - 1)
        }
    }

    const handleNext = () => {
        if (pagebtn3!==10){
            setPageBtn1(pagebtn1 + 1)
            setPageBtn2(pagebtn2 + 1)
            setPageBtn3(pagebtn3 + 1)
        }
    }


  return (
    <div className="d-flex justify-content-center gap-1 text-white font-weight-bold">
      <Link className="btn btn-outline-primary" onClick={handlePrevious}>
        Previous
      </Link>
      <Link className="btn btn-outline-primary" to={`/page/${pagebtn1}`}>
        { pagebtn1}
      </Link>
      <Link className="btn btn-outline-primary" to={`/page/${pagebtn2}`} >
        {pagebtn2}
      </Link>
      <Link className="btn btn-outline-primary" to={`/page/${pagebtn3}`} >
        {pagebtn3}
      </Link>
      
        <button className="btn btn-outline-primary" onClick={handleNext}>
          Next
        </button>
    </div>
  );
};

export default Pagination;
