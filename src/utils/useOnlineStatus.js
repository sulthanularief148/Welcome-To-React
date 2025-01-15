import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true)

    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false)
            console.log("Offline")
        })
        window.addEventListener("online", () => {
            setOnlineStatus(true)
            console.log("online")
        })
    }, [])

    return onlineStatus;
}
export default useOnlineStatus;