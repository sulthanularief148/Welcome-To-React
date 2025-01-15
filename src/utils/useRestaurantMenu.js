import { useEffect, useState } from "react";
import { MENU_URL } from "./utility";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null)
    const fetchData = async () => {
        const data = await fetch(`${MENU_URL}${resId}`)
        const jsonData = await data.json();
        setResInfo(jsonData)
    }
    useEffect(() => {
        fetchData()
    }, [])

    return resInfo;
}
export default useRestaurantMenu;