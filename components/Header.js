import Image from 'next/image';
import React from 'react';
import {HiOutlineHome, HiOutlineSearch} from "react-icons/hi";
import {RiFlag2Line} from "react-icons/ri";
import {MdOutlineOndemandVideo, MdOutlineExpandMore} from "react-icons/md";
import {AiFillBell, AiFillMessage, AiOutlineShop} from "react-icons/ai";
import {IoGameControllerOutline} from "react-icons/io5";
import {CgMenuGridO} from 'react-icons/cg'

const Header = () => {
  return (
    <div className='bg-white flex items-center p-2 shadow-md top-0 sticky z-50 h-16'>
        {/* Left */}
        <div className='flex min-w-fit'>
            <Image 
            src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/512px-Facebook_f_logo_%282021%29.svg.png?20210818083032"
            height={40}
            width={40}
            />
            <div className='flex items-center space-x-2 px-2 ml-2 rounded-full bg-gray-100 text-gray-500'>
              <HiOutlineSearch size={20} />
              <input className='hidden lg:inline-flex bg-transparent focus:outline-none' type='text' placeholder='Search facebook'/>
            </div>
        </div>
        {/* Center */}
        <div className='flex flex-grow justify-center mx-2'>
          <div className='flex items-center'>
            <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
              <HiOutlineHome className='mx-auto size-25'/>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
              <RiFlag2Line className='mx-auto size-25'/>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
              <MdOutlineOndemandVideo className='mx-auto size-25'/>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
              <AiOutlineShop className='mx-auto size-25'/>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
              <IoGameControllerOutline className='mx-auto size-25'/>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className='flex items-center justify-end min-w-fit space-x-2'>
        <Image 
            src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/512px-Facebook_f_logo_%282021%29.svg.png?20210818083032"
            height={40}
            width={40}
            />
            <p className='hidden xl:inline-flex font-semibold text-sm whitespace-nowrap p-3 max-w-xs'>Anish</p>
            <CgMenuGridO size={20}
            className='hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300'
            />
            <AiFillMessage 
            size={20}
            className='hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300'
            />
            <AiFillBell
            size={20}
            className='hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300'
            />
            <MdOutlineExpandMore 
            size={20}
            className='hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300'
            />
        </div>
    </div>
  );
};

export default Header