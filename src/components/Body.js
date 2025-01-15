import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    // State Variable , Special Variable
    const [listOfRestaurant, setListOfRestaurant] = useState([])
    const [filteredRestaurant, setFilteredRestaurant] = useState([])
    const [searchText, setSearchText] = useState("")
    const onlineStatus = useOnlineStatus()


    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const jsonData = await data.json();

        const restaurant = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurant(restaurant)
        setFilteredRestaurant(restaurant);


    }
    if (onlineStatus === false) return <p>Check your Internet Connection</p>

    return (!filteredRestaurant || filteredRestaurant.length === 0) ? <Shimmer /> : (
        <div className='body'>
            <div className='filter'>
                <div className="search">
                    <input type="text" className="search-input" placeholder="Search..." value={searchText} onChange={(event) => {

                        setSearchText(event.target.value)
                    }} />
                    <button className="search-btn" onClick={() => {
                        const searchFilterRestaurant = listOfRestaurant.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRestaurant(searchFilterRestaurant)
                    }}>Search</button>
                </div>


                <button className="filter-btn" onClick={() => {
                    const filteredRes = listOfRestaurant.filter(res => res.info.avgRating > 4.5)
                    setFilteredRestaurant(filteredRes)
                }
                }>Top Rated Reataurant</button>
            </div>
            <div className='res-container'>

                {
                    filteredRestaurant.map((restaurant) =>
                        <div className="res-card hover:transform hover:scale-105 hover:shadow-2xl" key={restaurant.info.id}>
                            <Link to={"/restaurant/" + restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default Body;

