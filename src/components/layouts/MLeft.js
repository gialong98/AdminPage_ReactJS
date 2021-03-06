import React from 'react'
import { Link } from 'react-router-dom'

const MLeft = (value) => {
    const { handleLogout } = value.value
    return (
        <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="sidebar-heading">Coffee Code </div>
            <div className="list-group list-group-flush">
                <Link to="/" className="list-group-item list-group-item-action bg-light">Dashboard</Link>
                <Link to="/dashboard/user" className="list-group-item list-group-item-action bg-light">Users</Link>
                <Link to="/dashboard/product" className="list-group-item list-group-item-action bg-light">Products</Link>
                <Link to="/dashboard/order" className="list-group-item list-group-item-action bg-light">Orders</Link>
                <Link onClick={handleLogout} to="#logout" className="list-group-item list-group-item-action bg-light">Logout</Link>
            </div>
        </div>
    )
}

export default MLeft