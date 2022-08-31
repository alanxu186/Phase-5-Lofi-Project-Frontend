import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav);
    }


    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto p-4 text-white'>

            <h1 className='w-full text-3xl font-bold text-[#a1bdd0]'>Cafe Heiwa</h1>
            <ul className="hidden md:flex">
                <li className="p-4"> <Link to={"/main"}>Main</Link> </li>
                <li className="p-4"> <Link to={"/home"}>Home</Link> </li>
                <li className="p-4"> <Link to={"/about"}>About</Link> </li>
                <li className="p-4"> <Link to={"/bookmark"}>Bookmark</Link> </li>
                <li className="p-4"> <Link to={"/profile"}>Profile</Link> </li>
            </ul>

            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}

            </div>

            <div>
                <ul className={nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#18434e] ease-in-out duration-500" : "ease-in-out duration-500 fixed left-[-100%]"}>
                    <h1 className='w-full text-3xl font-bold text-[#a1bdd0]'> Cafe Heiwa</h1>
                    <li className='p-4 border-b border-gray-600'><Link to={"/main"}>Main</Link></li>
                    <li className='p-4 border-b border-gray-600'><Link to={"/home"}>Home</Link></li>
                    <li className='p-4 border-b border-gray-600'><Link to={"/about"}>About</Link></li>
                    <li className='p-4 border-b border-gray-600'><Link to={"/bookmark"}>Bookmark</Link></li>
                    <li className='p-4 border-b border-gray-600'><Link to={"/profile"}>Profile</Link></li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar