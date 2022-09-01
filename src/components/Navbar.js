import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import cafelogo from '../assets/cafelogo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className='sticky top-0 w-full text-white flex justify-between p-4 items-center z-50 bg-[#18434e]'>

            <div className='text-2xl font-bold text-center uppercase p-4'>
                <h1 className='block text-7xl'> Cafe Heiwa</h1>
                {/* <img src={cafelogo}/> */}
            </div>

            <nav>
                <div className='absolute right-6 md:hidden top-6 scale-150'>
                    <AiOutlineMenu onClick={handleNav} className='scale-150 cursor-pointer' />
                </div>

                <ul className="hidden md:flex gap-8 p-6 uppercase bg-white/10">
                    <li> <Link to={"/main"}>Main</Link> </li>
                    <li> <Link to={"/home"}>Home</Link> </li>
                    <li> <Link to={"/about"}>About</Link> </li>
                    <li> <Link to={"/bookmark"}>Bookmark</Link> </li>
                    <li> <Link to={"/profile"}>Profile</Link> </li>
                    <li> <Link to={"/login"}>Login</Link> </li>
                </ul>

                <ul className={nav ? 'flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden' : 'hidden'}>
                    <AiOutlineClose onClick={handleNav} className='cursor-pointer' />

                    <li> <Link to={"/main"}>Main</Link> </li>
                    <li> <Link to={"/home"}>Home</Link> </li>
                    <li> <Link to={"/about"}>About</Link> </li>
                    <li> <Link to={"/bookmark"}>Bookmark</Link> </li>
                    <li> <Link to={"/profile"}>Profile</Link> </li>
                    <li> <Link to={"/login"}>Login</Link> </li>
                </ul>
            </nav>

        </div>



        // <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto p-4 text-[#a1bdd0]'>

        //     <h1 className='w-full text-3xl font-bold text-[#a1bdd0]'>Cafe Heiwa</h1>
        //     <ul className="hidden md:flex">
        //         <li className="p-4"> <Link to={"/main"}>Main</Link> </li>
        //         <li className="p-4"> <Link to={"/home"}>Home</Link> </li>
        //         <li className="p-4"> <Link to={"/about"}>About</Link> </li>
        //         <li className="p-4"> <Link to={"/bookmark"}>Bookmark</Link> </li>
        //         <li className="p-4"> <Link to={"/profile"}>Profile</Link> </li>
        //         <li className="p-4"> <Link to={"/login"}>Login</Link> </li>
        //     </ul>

        //     <div onClick={handleNav} className="block md:hidden">
        //         {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}

        //     </div>

        //     <div>
        //         <ul className={nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#18434e] ease-in-out duration-500" : "ease-in-out duration-500 fixed left-[-100%]"}>
        //             <h1 className='w-full text-3xl font-bold text-[#a1bdd0]'> Cafe Heiwa</h1>
        //             <li className='p-4 border-b border-gray-600'><Link to={"/main"}>Main</Link></li>
        //             <li className='p-4 border-b border-gray-600'><Link to={"/home"}>Home</Link></li>
        //             <li className='p-4 border-b border-gray-600'><Link to={"/about"}>About</Link></li>
        //             <li className='p-4 border-b border-gray-600'><Link to={"/bookmark"}>Bookmark</Link></li>
        //             <li className='p-4 border-b border-gray-600'><Link to={"/profile"}>Profile</Link></li>
        //             <li className='p-4 border-b border-gray-600'><Link to={"/login"}>Login</Link></li>

        //         </ul>
        //     </div>

        // </div>
    )
}

export default Navbar