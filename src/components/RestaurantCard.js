import { CDN_URL, IMAGE_URL } from "../utils/utility";
const RestaurantCard = (props) => {
    const { name, avgRating, cuisines, cloudinaryImageId, sla, areaName } = props?.resData?.info

    return (
        <div className='res-card'>

            {CDN_URL ? (
                <img className='res-img' src={`${CDN_URL}${cloudinaryImageId}`} alt='res-image' />
            ) : (
                <img className='res-demo-img' src={IMAGE_URL} alt='res-image' />
            )}

            <div className="res-card-body">
                <h2 className='res-name'>{name}</h2>

                <h2 className='res-cuisine'>{cuisines.join(", ")}</h2>
                <div className="rating">
                    <h3 className='res-rating'><span className="circle">⭐</span>{avgRating} 🔸{sla.deliveryTime} mins</h3>
                </div>
                <h2 className="res-cuisine">{areaName}</h2>
            </div>


        </div>
    )
}

export default RestaurantCard;