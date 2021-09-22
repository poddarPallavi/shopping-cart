import { Button, Form} from 'react-bootstrap';
import React from 'react'
import Rating from './Rating';
import { CartState } from '../context/Context';

const Filters = () => {

    const{productState:{byStock, byFastDelivery, sort, byRating}, productDispatch}=CartState();

    return (
        <div className="filters">
            <span className="title">Filter Products</span>

            <span><Form.Check inline label="Ascending" name="group1" type="radio" id={`inline-1`} onChange={(i)=>productDispatch({
                    type:"SORT_BY_PRICE",
                    payload: "lowtohigh",
                })} 
                checked={sort==="lowtohigh" ? true : false}
                />
            </span>

            <span><Form.Check inline label="Descending" name="group1" type="radio" id={`inline-2`} 
            onChange={(i)=>productDispatch({
                type:"SORT_BY_PRICE",
                payload: "hightolow",
            })} 
            checked={sort==="hightolow" ? true : false}
            />
            </span>

            <span><Form.Check inline label="Include out of Stock" name="group1" type="checkbox" id={`inline-3`} onChange={(i)=>productDispatch({
                type:"FILTER_BY_STOCK",
            })} 
            checked={byStock}
            
            />
            </span>

            <span><Form.Check inline label="Fast Delivery Only" name="group1" type="checkbox" id={`inline-4`} onChange={(i)=>productDispatch({
                type:"FILTER_BY_DELIVERY",
            })} 
            checked={byFastDelivery}
            />
            </span>

            <span>
                <label style={{paddingRight:10}}>Rating: </label>
                <Rating rating={byRating} onClick={(i)=>productDispatch({
                    type:"FILTER_BY_RATING",
                    payload: i+1,
                })} style={{cursor:"pointer"}} />
            </span>

            <Button variant="light" onClick={(i)=>productDispatch({
                type:"CLEAR_FILTERS",
            })}> Clear Filters</Button>
        </div>
    )
}

export default Filters;
