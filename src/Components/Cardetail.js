import React from 'react'
import { Data } from '../Data'
import { useParams } from 'react-router-dom'
import './Cars.css'
import { GoPeople } from 'react-icons/go'
import { BiGasPump } from 'react-icons/bi'
import { MdSpeed } from 'react-icons/md'
import { GiSteeringWheel } from 'react-icons/gi'
import { AiOutlineHeart } from 'react-icons/ai'
import { Link, Navigate } from "react-router-dom";

function Cardetail() {

    const { id } = useParams();
    const cardata = Data.find((item) => item.id == id)
    return (
        <>
        <Link to={'/'} className='btn btn-secondary m-5'> Home </Link>
        <div className="card" style={{ width: "24rem", textDecoration: 'none', color: 'black' }}>
            <img className="card-img-top border-radius" src={cardata.image} alt="Card image cap" height={"210px"} />
            <div className="m-2">
                <div className='cardbody'>
                    <h5>{cardata.name}</h5>
                    <button className="btn btn-outline-primary"> {cardata.model}</button>
                </div>

                <div className='features'>
                    <div>
                        <div className='table-row'>
                            <GoPeople />
                            <p> 4 poeple </p>
                        </div>
                        <div className='table-row'>
                            <BiGasPump />
                            <p>automatic </p>
                        </div>
                    </div>
                    <div>
                        <div className='table-row'>
                            <MdSpeed />
                            <p> {cardata.milage} / 1 litre </p>
                        </div>
                        <div className='table-row'>
                            <GiSteeringWheel />
                            <p>automatic </p>
                        </div>
                    </div>
                </div>

                <hr />

                <div className='flex card-base'>
                    <span className='d-flex justify-content-baseline'> <h2>$ {cardata.price}</h2> /month</span>
                    <div className='ml-5 d-flex gap-2'>
                        <button className="btn btn-outline-primary">
                            <AiOutlineHeart />
                        </button>
                        <button className="btn btn-primary ">Rent now</button>
                    </div>
                </div>
            </div>
        </div>
        </> 
    )
}

export default Cardetail