import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { CDN_URL, MENU_IMAGES } from '../utils/utility';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    // Destructure restaurant info
    const {
        name = '',
        costForTwo = 0,
        cuisines = [],
        sla,
        areaName = '',
        cloudinaryImageId = ''
    } = resInfo?.data?.cards[2]?.card?.card?.info || {};

    // Extract item cards
    const itemCards =
        resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];

    return resInfo === null ? (
        <Shimmer />
    ) : (
        <div className="flex flex-col items-center px-4 py-8">
            {/* Restaurant Details */}
            <div className="w-full max-w-4xl flex flex-col sm:flex-row items-start gap-6 bg-white p-6 rounded-lg shadow-md">
                <img
                    src={`${CDN_URL}${cloudinaryImageId}`}
                    className="w-36 h-36 rounded-lg object-cover"
                    alt="Restaurant"
                />
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
                    <p className="text-sm text-gray-500">{cuisines.join(', ')}</p>
                    <p className="text-sm text-gray-500">{areaName}</p>
                    <p className="text-sm text-gray-600">
                        {costForTwo / 100} Rupees - {sla?.deliveryTime} mins
                    </p>
                </div>
            </div>

            {/* Menu Items */}
            <div className="w-full max-w-4xl mt-8">
                {itemCards.length > 0 ? (
                    <div className="grid grid-cols-1  gap-6">
                        {itemCards.map((item, index) => {
                            const {
                                name,
                                description,
                                price,
                                category,
                                imageId,
                                defaultPrice
                            } = item?.card?.info;

                            return (
                                <div
                                    key={index}
                                    className="flex flex-col justify-between sm:flex-row-reverse gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                    <div>
                                        {imageId ? (
                                            <img
                                                src={`${MENU_IMAGES}${imageId}`}
                                                className="w-44 h-36 object-cover rounded-lg mb-4"
                                                alt="Menu Item"
                                            />
                                        ) : (
                                            <div className="w-full h-36 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                                                No Image Available
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <h2 className="text-lg font-medium text-gray-800">{name}</h2>
                                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>
                                        <p className="text-sm text-gray-500 mt-1">Category: {category}</p>
                                        <p className="text-base font-semibold text-gray-700 mt-2">
                                            {defaultPrice ? defaultPrice / 100 : price / 100} Rupees
                                        </p>
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <p className="text-center text-gray-500 mt-8">Items Not Available</p>
                )}
            </div>
        </div>
    );
};

export default RestaurantMenu;
