import { CDN_URL } from "../utils/utility";
const RestaurantCard = (props) => {
    const { name, avgRating, cuisines, cloudinaryImageId, sla } = props?.resData?.info

    return (
        <div className='res-card'>
            <figure >
                <img className='res-img' src={`${CDN_URL}${cloudinaryImageId} `} alt='res-image' />
            </figure>
            <h2 className='res-name'>{name}</h2>
            <h2 className='res-rating'>{avgRating}⭐</h2>
            <h2 className='res-cuisine'>{cuisines.join(", ")}</h2>
            <h2 className='res-timing'>{sla.deliveryTime} mins</h2>
        </div>
    )
}

export default RestaurantCard;