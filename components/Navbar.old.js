// import React from 'react'

// import { Link } from "next/link"
import AuthenticationButton from "./authentification-button"
export const Navbar = () => {
    return (
        <header style={{}}>
            <div>
                <ul>
                    <li>
                        <a href="/dashboard">Dashboard</a>
                    </li>
                    <li>
                        <AuthenticationButton />
                    </li>
                    {/* <li>
                   <a href="/dashboard">Houses</a></Link>
                </li>
                <li>
                    <Link href="/api/auth/login"><a>Login</a></Link>
                </li> */}
                </ul>
            </div>
        </header >
    )
}
