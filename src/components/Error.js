import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
    const err = useRouteError()
    return (
        <div>
            <h2>{err.error.message}</h2>
            <p>{err.status} - {err.statusText}</p>
        </div>
    )
}

export default Error