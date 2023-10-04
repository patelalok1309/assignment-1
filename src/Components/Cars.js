import React, { useEffect , useState } from 'react'
import { Data } from '../Data'
import './Cars.css'
import { GoPeople } from 'react-icons/go'
import { BiGasPump } from 'react-icons/bi'
import { MdSpeed } from 'react-icons/md'
import { GiSteeringWheel } from 'react-icons/gi'
import { AiOutlineHeart } from 'react-icons/ai'
import { Link, Navigate } from "react-router-dom";
import { useStateValue } from '../context/stateProvider'
import reducer , {actionType} from '../context/reducer'

function Cars() {

    const [{searchTerm} ,dispatch] = useStateValue()
    const [filteredData, setFilteredData] = useState(null)


    useEffect(()=>{
        if(searchTerm.length > 0){
            setFilteredData(Data.filter((item) => item.name.toLowerCase().includes(searchTerm)))
        }
        else{
            setFilteredData(Data)
        }
    } , [searchTerm])

    const carData = filteredData  ? filteredData : Data;


    return (
        <div className='card-layout'>
            {
                carData.map((item, index) =>
                (
                    <div className="card" key={index} style={{ width: "24rem", textDecoration: 'none', color: 'black' }}>
                        <img className="card-img-top border-radius" src={item.image} alt="Card image cap" height={"210px"} />
                        <div className="m-2">
                            <div className='cardbody'>
                                <h5>{item.name}</h5>
                                <button className="btn btn-outline-primary"> {item.model}</button>
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
                                        <p> {item.milage} / 1 litre </p>
                                    </div>
                                    <div className='table-row'>
                                        <GiSteeringWheel />
                                        <p>automatic </p>
                                    </div>
                                </div>
                            </div>

                            <hr />

                            <div className='flex card-base'>
                                <span className='d-flex justify-content-baseline'> <h2>$ {item.price}</h2> /month</span>
                                <div className='ml-5 d-flex gap-2'>
                                    <button className="btn btn-outline-primary">
                                        <AiOutlineHeart />
                                    </button>
                                    <button className="btn btn-primary ">Rent now</button>
                                    <Link to={`/item/${item.id}`} className="btn btn-outline-primary">detail</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                )
            }
        </div>
    )
}

export default Cars