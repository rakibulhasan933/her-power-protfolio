import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Her Power</a>
            </div>
            <div className="navbar-center hidden lg:flex">

            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href="/services">Services</Link>
                    </li>
                    <li>
                        <Link href="/work">Work</Link>
                    </li>
                    <li><Link href="/skill">Skill</Link> </li>
                    <li><Link href="/contacts">Contacts</Link> </li>
                </ul>
                <a className="btn">Hire Me</a>
            </div>
        </div>
    )
}
