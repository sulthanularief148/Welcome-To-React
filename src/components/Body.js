import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
const Body = () => {

    // State Variable , Special Variable
    const [listOfRestaurant, setListOfRestaurant] = useState([])
    // Dependency Array
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        // API Call
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.75410&lng=79.76630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const jsonData = await data.json();
        // Optional Chaining
        const restaurant = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        console.log(restaurant)
        setListOfRestaurant(restaurant)
    }
    if (listOfRestaurant.length === 0) {
        return <div><Shimmer /></div>
    }
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

