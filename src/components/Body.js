import { useState } from "react";
import resList from "../utils/mockdata";
import RestaurantCard from "./RestaurantCard";
const Body = () => {

    // State Variable , Special Variable
    const [listOfRestaurant, setListOfRestaurant] = useState(resList)
    return (
        <div className='body'>
            <div className='filter-btn'>
                <button className="filter-btn" onClick={() => {
                    const filteredRestaurant = listOfRestaurant.filter(res => res.info.avgRating > 4.2)
                    setListOfRestaurant(filteredRestaurant)
                }
                }>Top Rated Reataurant</button>
            </div>
            <div className='res-container'>

                {
                    listOfRestaurant.map((restaurant, index) => <RestaurantCard key={index} resData={restaurant} />)
                }

            </div>
        </div>
    )
}

export default Body;

