import React from 'react'
import { MenuIcon } from '../../MagisterMatricula/components/svg/MenuIcon'

export const Navbar = () => {
    return (
        <nav className="bg-transparent px-2 py-2 ">
            <div className="container flex justify-end items-center mx-auto">
                <button type="button" className=" p-1 text-sm rounded-lg hover:bg-hover-tp1  " >
                    <MenuIcon />
                </button>
            </div>
        </nav>
    )
}