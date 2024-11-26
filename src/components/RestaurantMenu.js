import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import { MENU_URL, CDN_URL } from '../utils/utility'

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null)
    const { resId } = useParams()
    const fetchMenu = async () => {

        try {
            const data = await fetch(`${MENU_URL}${resId}`)
            const jsonData = await data.json();
            setResInfo(jsonData)
        } catch (error) {
            console.log(error, "Something went wrong")
        }
    }

    useEffect(() => {
        fetchMenu()
    }, [])
    const { name, costForTwo, cuisines, sla, areaName, cloudinaryImageId } = resInfo?.data?.cards[2]?.card?.card?.info || {}
    return resInfo === null ? <Shimmer /> : (
        <div className='res-menu'>
            <img src={`${CDN_URL}${cloudinaryImageId}`} alt='res-menu-img' />
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{areaName}</h3>
            <p>{costForTwo / 100} Rupees - {sla?.deliveryTime} mins</p>
            <ul>
                <li>Biriyani</li>
                <li>Chicken</li>
                <li>Mutton</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu