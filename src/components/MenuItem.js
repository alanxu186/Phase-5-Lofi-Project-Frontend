import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose} from "react-icons/ai"


const MenuItem = ({handleNav, nav}) => {
    return (
        <ul className={nav ? 'flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden' : 'hidden'}>
            <AiOutlineClose onClick={handleNav} className='cursor-pointer'/>

            <li> <Link to={"/main"}>Main</Link> </li>
            <li> <Link to={"/home"}>Home</Link> </li>
            <li> <Link to={"/about"}>About</Link> </li>
            <li> <Link to={"/bookmark"}>Bookmark</Link> </li>
            <li> <Link to={"/profile"}>Profile</Link> </li>
            <li> <Link to={"/login"}>Login</Link> </li>
        </ul>
    )
}

export default MenuItem