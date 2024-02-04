import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Customer() {
    return (
        <div>
            {/* <h1 className="text-xl font-medium">Customer</h1> */}
            <Outlet />
        </div>
    )
}

export default Customer