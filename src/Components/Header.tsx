'use client'
import { useState } from "react"
import { userInfo, headerItems } from "@/constants/constant"
import { NavItems } from "@/models/Header"
import { BiMenu } from 'react-icons/bi'
import { Link as ScrollLink } from 'react-scroll';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

const Header: React.FC = () => {
    const [navItem, showNavItems] = useState<boolean>(false);

    return (
        <header className="bg-white p-6 justify-between fixed top-0 w-full z-10 md:flex">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">{userInfo.name}</h2>
                <BiMenu
                    size={30}
                    className="md:hidden"
                    onClick={() => showNavItems(prevState => !prevState)}
                />
            </div>
            <div className={`mr-8 md:space-x-6 mt-3 md:mt-0 md:block ${navItem ? 'block' : 'hidden'}`}>
                {
                    Object.keys(headerItems).map(item => (
                        <ScrollLink
                            to={headerItems[item as keyof NavItems].page}
                            key={headerItems[item as keyof NavItems].label}
                            className="block md:inline-block cursor-pointer"
                            spy={true}
                            smooth={true}
                        >
                            {headerItems[item as keyof NavItems].label}
                        </ScrollLink>
                    ))
                }
            </div>
            {/* Social Links */}
            <div className="flex space-x-4 items-center mt-3 md:mt-0 md:ml-4">
                <a href="https://www.linkedin.com/in/priyanshu-prakhar-5b0500249/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} className="text-blue-700 hover:text-blue-900" />
                </a>
                <a href="https://github.com/14priyansh" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} className="text-gray-800 hover:text-black" />
                </a>
                <a href="https://leetcode.com/u/pgpgpg/" target="_blank" rel="noopener noreferrer">
                    <SiLeetcode size={24} className="text-yellow-500 hover:text-yellow-600" />
                </a>
                <a href="https://codeforces.com/profile/shukla_01" target="_blank" rel="noopener noreferrer">
                    <SiCodeforces size={24} className="text-blue-500 hover:text-blue-700" />
                </a>
            </div>
        </header>
    )
}

export default Header